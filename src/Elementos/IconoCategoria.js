import {ReactComponent as IconoComida} from './../imagenes/cat_comida.svg';
import {ReactComponent as IconoCompras} from './../imagenes/cat_compras.svg';
import {ReactComponent as IconoCuentasYPagos} from './../imagenes/cat_cuentas-y-pagos.svg';
import {ReactComponent as IconoDiversion} from './../imagenes/cat_diversion.svg';
import {ReactComponent as IconoHogar} from './../imagenes/cat_hogar.svg';
import {ReactComponent as IconoRopa} from './../imagenes/cat_ropa.svg';
import {ReactComponent as IconoSaludEHigiene} from './../imagenes/cat_salud-e-higiene.svg';
import {ReactComponent as IconoTransporte} from './../imagenes/cat_transporte.svg';

const IconoCategoria = ({id}) => {
	switch(id){
		case 'Food':
			return <IconoComida />;
		case 'Shopping':
			return <IconoCompras />;
		case 'Bills':
			return <IconoCuentasYPagos />;
		case 'Fun':
			return <IconoDiversion />;
		case 'Home':
			return <IconoHogar />;
		case 'Clothes':
			return <IconoRopa />;
		case 'Health':
			return <IconoSaludEHigiene />;
		case 'Transport':
			return <IconoTransporte />;
		default:
			return <IconoTransporte />;
		break;
	}
}
 
export default IconoCategoria;