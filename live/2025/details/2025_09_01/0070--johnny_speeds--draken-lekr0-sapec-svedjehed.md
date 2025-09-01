### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: draken, Lekr0, Sapec, Svedjehed<br />
Global Rank: [70](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  932.0<br />
<br />
Final Rank Value (932.0) = Starting Rank Value (902.5) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.255[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 902.5
- 400 + ( ( 0.262 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 902.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      593 | 2025-08-07 | TNL           | L   | 1.000      | -            | -                | -                | -         |    -5.32 | draken, HEAP, Lekr0, Sapec, Svedjehed   |
|           16 |      598 | 2025-08-06 | Zero Tenacity | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.810 (0.352)    | 0 (0.000) |    17.89 | draken, HEAP, Lekr0, Sapec, Svedjehed   |
|           15 |      620 | 2025-08-04 | Nexus         | W   | 1.000      | 0.435        | 0.055 (0.024)    | 0.778 (0.338)    | 0 (0.000) |    17.97 | draken, Lekr0, Meinz, Sapec, Svedjehed  |
|           14 |      636 | 2025-08-03 | 9INE          | L   | 1.000      | -            | -                | -                | -         |    -8.66 | draken, Lekr0, Meinz, Sapec, Svedjehed  |
|           13 |      686 | 2025-07-31 | Monte         | W   | 0.987      | 0.435        | 0.007 (0.003)    | 0.947 (0.406)    | 0 (0.000) |    21.48 | draken, Lekr0, Meinz, Sapec, Svedjehed  |
|           12 |      695 | 2025-07-30 | CYBERSHOKE    | L   | 0.981      | -            | -                | -                | -         |   -12.64 | draken, Lekr0, Meinz, Sapec, Svedjehed  |
|           11 |     1414 | 2025-06-14 | ECSTATIC      | L   | 0.674      | -            | -                | -                | -         |    -3.12 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|           10 |     1428 | 2025-06-14 | Phantom       | W   | 0.673      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.673) |     1.19 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            9 |     1446 | 2025-06-13 | Metizport     | L   | 0.668      | -            | -                | -                | -         |   -10.50 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            8 |     1727 | 2025-05-24 | Alliance      | L   | 0.533      | -            | -                | -                | -         |    -4.81 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            7 |     1740 | 2025-05-23 | ENCE Academy  | W   | 0.527      | 0.500        | 0.016 (0.004)    | 0.153 (0.040)    | 1 (0.527) |     4.86 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            6 |     1759 | 2025-05-22 | WOPA          | W   | 0.520      | 0.500        | 0.000 (0.000)    | 0.027 (0.007)    | 1 (0.520) |     1.04 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            5 |     1812 | 2025-05-20 | ECSTATIC      | L   | 0.507      | -            | -                | -                | -         |    -2.56 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            4 |     1821 | 2025-05-20 | JANO          | W   | 0.505      | 0.500        | 0.000 (0.000)    | 0.053 (0.013)    | 1 (0.505) |     1.80 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            3 |     2055 | 2025-05-10 | Viperio       | W   | 0.440      | 0.435        | 0.000 (0.000)    | 0.035 (0.007)    | 0 (0.000) |     0.79 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            2 |     2245 | 2025-05-03 | Alliance      | W   | 0.394      | 0.435        | 0.043 (0.007)    | 0.732 (0.125)    | 0 (0.000) |     9.38 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            1 |     2251 | 2025-05-03 | EYEBALLERS    | W   | 0.393      | 0.435        | 0.000 (0.000)    | 0.011 (0.002)    | 0 (0.000) |     0.71 | draken, MaiL09, Sapec, SHiNE, Svedjehed |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,013.10)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-24 |      0.534 | $15,000.00     | $8,013.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
