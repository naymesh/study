package org.ibp.bms.web.rest.mapper;

import org.ibp.bms.domain.*;
import org.ibp.bms.web.rest.dto.ClientDTO;

import org.mapstruct.*;
import java.util.List;

/**
 * Mapper for the entity Client and its DTO ClientDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface ClientMapper {

    ClientDTO clientToClientDTO(Client client);

    List<ClientDTO> clientsToClientDTOs(List<Client> clients);

    Client clientDTOToClient(ClientDTO clientDTO);

    List<Client> clientDTOsToClients(List<ClientDTO> clientDTOs);
}
