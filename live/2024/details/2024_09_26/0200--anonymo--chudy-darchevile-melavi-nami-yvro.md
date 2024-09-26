### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Melavi, Nami, yvro<br />
Global Rank: [200](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [123]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  580.3<br />
<br />
Final Rank Value (580.3) = Starting Rank Value (565.2) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 565.2
- 400 + ( ( 0.087 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 565.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       16 | 2024-09-26 | DMS               | L   | 1.000      | -            | -                | -                | -         |    -5.19 | chudy, darchevile, Melavi, Nami, yvro |
|           13 |      118 | 2024-09-24 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |    -3.02 | chudy, darchevile, Enzo, Nami, yvro   |
|           12 |      227 | 2024-09-20 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |    -3.28 | chudy, darchevile, Enzo, Nami, yvro   |
|           11 |      585 | 2024-09-07 | Molotov           | L   | 1.000      | -            | -                | -                | -         |   -10.60 | chudy, darchevile, Enzo, Nami, yvro   |
|           10 |      729 | 2024-09-03 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |    -3.49 | chudy, darchevile, Enzo, Nami, yvro   |
|            9 |      969 | 2024-08-27 | ex-Enterprise     | L   | 0.999      | -            | -                | -                | -         |    -6.08 | chudy, darchevile, Enzo, Nami, yvro   |
|            8 |     1097 | 2024-08-25 | Verdant           | W   | 0.985      | 0.371        | 0.014 (0.005)    | 0.379 (0.138)    | 0 (0.000) |    23.21 | chudy, darchevile, Enzo, Nami, yvro   |
|            7 |     1144 | 2024-08-23 | Aurora Young Blud | L   | 0.972      | -            | -                | -                | -         |    -3.87 | chudy, darchevile, Enzo, Nami, yvro   |
|            6 |     1251 | 2024-08-21 | Illuminar         | W   | 0.958      | 0.371        | 0.007 (0.003)    | 0.371 (0.132)    | 0 (0.000) |    22.50 | chudy, darchevile, Enzo, Nami, yvro   |
|            5 |     1308 | 2024-08-19 | GUN5              | L   | 0.946      | -            | -                | -                | -         |    -3.80 | chudy, darchevile, Enzo, Nami, yvro   |
|            4 |     1356 | 2024-08-17 | GUN5              | L   | 0.933      | -            | -                | -                | -         |    -4.26 | chudy, darchevile, Enzo, Nami, yvro   |
|            3 |     1418 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.918      | 0.371        | 0.087 (0.030)    | 0.904 (0.308)    | 0 (0.000) |    24.00 | chudy, darchevile, Enzo, Nami, yvro   |
|            2 |     2720 | 2024-06-24 | ROSOMAHA          | L   | 0.571      | -            | -                | -                | -         |   -10.02 | chudy, darchevile, Enzo, Nami, yvro   |
|            1 |     2724 | 2024-06-23 | Johnny Speeds     | L   | 0.565      | -            | -                | -                | -         |    -0.93 | chudy, darchevile, Enzo, Nami, yvro   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
