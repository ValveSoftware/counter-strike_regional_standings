### Roster Details<br />
Team Name: Anonymo<br />
Roster: chudy, darchevile, Enzo, morelz, Nami<br />
Global Rank: [211](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [128]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  563.4<br />
<br />
Final Rank Value (563.4) = Starting Rank Value (563.5) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 563.5
- 400 + ( ( 0.085 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 563.5


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
|           16 |       22 | 2024-10-02 | Illuminar         | L   | 1.000      | -            | -                | -                | -         |    -7.04 | chudy, darchevile, Enzo, morelz, Nami |
|           15 |      206 | 2024-09-27 | The Suspect       | L   | 1.000      | -            | -                | -                | -         |    -7.36 | chudy, darchevile, Melavi, Nami, yvro |
|           14 |      249 | 2024-09-26 | DMS               | L   | 1.000      | -            | -                | -                | -         |    -5.23 | chudy, darchevile, Melavi, Nami, yvro |
|           13 |      351 | 2024-09-24 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |    -3.05 | chudy, darchevile, Enzo, Nami, yvro   |
|           12 |      460 | 2024-09-20 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |    -3.31 | chudy, darchevile, Enzo, Nami, yvro   |
|           11 |      818 | 2024-09-07 | Molotov           | L   | 1.000      | -            | -                | -                | -         |   -10.29 | chudy, darchevile, Enzo, Nami, yvro   |
|           10 |      962 | 2024-09-03 | Endpoint          | L   | 1.000      | -            | -                | -                | -         |    -3.56 | chudy, darchevile, Enzo, Nami, yvro   |
|            9 |     1202 | 2024-08-27 | ex-Enterprise     | L   | 0.958      | -            | -                | -                | -         |    -5.96 | chudy, darchevile, Enzo, Nami, yvro   |
|            8 |     1330 | 2024-08-25 | Verdant           | W   | 0.944      | 0.371        | 0.013 (0.005)    | 0.323 (0.113)    | 0 (0.000) |    22.27 | chudy, darchevile, Enzo, Nami, yvro   |
|            7 |     1377 | 2024-08-23 | Aurora Young Blud | L   | 0.931      | -            | -                | -                | -         |    -3.85 | chudy, darchevile, Enzo, Nami, yvro   |
|            6 |     1484 | 2024-08-21 | Illuminar         | W   | 0.917      | 0.371        | 0.007 (0.002)    | 0.423 (0.144)    | 0 (0.000) |    21.83 | chudy, darchevile, Enzo, Nami, yvro   |
|            5 |     1541 | 2024-08-19 | GUN5              | L   | 0.905      | -            | -                | -                | -         |    -3.64 | chudy, darchevile, Enzo, Nami, yvro   |
|            4 |     1589 | 2024-08-17 | GUN5              | L   | 0.892      | -            | -                | -                | -         |    -4.04 | chudy, darchevile, Enzo, Nami, yvro   |
|            3 |     1651 | 2024-08-15 | ALTERNATE aTTaX   | W   | 0.877      | 0.371        | 0.084 (0.027)    | 0.847 (0.275)    | 0 (0.000) |    23.04 | chudy, darchevile, Enzo, Nami, yvro   |
|            2 |     2953 | 2024-06-24 | SkyFury           | L   | 0.530      | -            | -                | -                | -         |    -9.08 | chudy, darchevile, Enzo, Nami, yvro   |
|            1 |     2957 | 2024-06-23 | Johnny Speeds     | L   | 0.524      | -            | -                | -                | -         |    -0.94 | chudy, darchevile, Enzo, Nami, yvro   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
