### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: D7, juliano, kyossa, vicu, wieenN<br />
Global Rank: [179](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  612.2<br />
<br />
Final Rank Value (612.2) = Starting Rank Value (637.4) + Head To Head Adjustments (-25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.4
- 400 + ( ( 0.127 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 637.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      459 | 2025-05-28 | CPH Wolves    | L   | 0.932      | -            | -                | -                | -         |    -8.79 | D7, juliano, kyossa, vicu, wieenN  |
|           13 |      468 | 2025-05-27 | 8Sins         | L   | 0.926      | -            | -                | -                | -         |   -14.53 | D7, juliano, kyossa, vicu, wieenN  |
|           12 |      658 | 2025-05-17 | FAVBET        | L   | 0.859      | -            | -                | -                | -         |    -5.28 | D7, juliano, kyossa, vicu, wieenN  |
|           11 |      678 | 2025-05-16 | TPuDCATb TPu  | L   | 0.853      | -            | -                | -                | -         |    -5.30 | D7, juliano, kyossa, vicu, wieenN  |
|           10 |     1451 | 2025-04-13 | BIG EQUIPA    | L   | 0.634      | -            | -                | -                | -         |   -10.37 | D7, juliano, kyossa, vicu, wieenN  |
|            9 |     1467 | 2025-04-12 | Zerance       | L   | 0.627      | -            | -                | -                | -         |    -7.02 | D7, juliano, kyossa, vicu, wieenN  |
|            8 |     1487 | 2025-04-11 | NIP Impact    | W   | 0.620      | 0.143        | 0.048 (0.004)    | 0.160 (0.014)    | 0 (0.000) |    14.56 | D7, juliano, kyossa, vicu, wieenN  |
|            7 |     2040 | 2025-03-27 | Akuma         | W   | 0.520      | 0.143        | 0.002 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     7.03 | D7, juliano, kyossa, vicu, wieenN  |
|            6 |     2260 | 2025-03-20 | nomercy fe    | W   | 0.474      | 0.143        | 0.001 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.91 | D7, juliano, kyossa, vicu, wieenN  |
|            5 |     2776 | 2025-03-06 | BIG EQUIPA    | L   | 0.381      | -            | -                | -                | -         |    -6.37 | D7, juliano, kyossa, vicu, wieenN  |
|            4 |     2951 | 2025-02-27 | AKA HERO KAJO | W   | 0.334      | 0.143        | 0.002 (0.000)    | 0.055 (0.003)    | 0 (0.000) |     4.80 | D7, juliano, kyossa, vicu, wieenN  |
|            3 |     3644 | 2025-02-05 | SAW           | L   | 0.186      | -            | -                | -                | -         |    -0.82 | Angelka, D7, juliano, kyossa, vicu |
|            2 |     3652 | 2025-02-05 | 500           | L   | 0.185      | -            | -                | -                | -         |    -1.32 | Angelka, D7, juliano, kyossa, vicu |
|            1 |     3697 | 2025-02-01 | Zerance       | W   | 0.160      | 0.143        | 0.031 (0.001)    | 0.138 (0.003)    | 0 (0.000) |     3.31 | D7, juliano, kyossa, vicu, wieenN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,077.78)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-13 |      0.634 | $1,700.00      | $1,077.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
