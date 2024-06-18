### Roster Details<br />
Team Name: IKLA<br />
Roster: adeX, Kvem, Lekr0, MICHU, Topa<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
Final Rank Value:  558.1<br />
<br />
Final Rank Value (558.1) = Starting Rank Value (537.3) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.3
- 400 + ( ( 0.068 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 537.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     3776 | 2024-01-20 | HEROIC       | L   | 0.201      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa |
|           10 |     3826 | 2024-01-19 | PERA         | L   | 0.195      | -            | -                | -                | -         |    -0.53 | adeX, Kvem, Lekr0, MICHU, Topa |
|            9 |     3878 | 2024-01-18 | Eternal Fire | L   | 0.189      | -            | -                | -                | -         |    -0.01 | adeX, Kvem, Lekr0, MICHU, Topa |
|            8 |     3882 | 2024-01-18 | Aurora       | W   | 0.189      | 0.143        | 0.526 (0.014)    | 0.874 (0.024)    | 0 (0.000) |     5.93 | adeX, Kvem, Lekr0, MICHU, Topa |
|            7 |     4146 | 2024-01-11 | PERA         | W   | 0.144      | 0.143        | 0.058 (0.001)    | 0.455 (0.009)    | 0 (0.000) |     4.16 | adeX, Kvem, Lekr0, MICHU, Topa |
|            6 |     4151 | 2024-01-11 | HEROIC       | L   | 0.143      | -            | -                | -                | -         |    -0.00 | adeX, Kvem, Lekr0, MICHU, Topa |
|            5 |     4160 | 2024-01-11 | Space        | W   | 0.143      | 0.143        | 0.007 (0.000)    | 0.419 (0.009)    | 0 (0.000) |     3.83 | adeX, Kvem, Lekr0, MICHU, Topa |
|            4 |     4165 | 2024-01-11 | 00NATION     | W   | 0.142      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.86 | adeX, Kvem, Lekr0, MICHU, Topa |
|            3 |     4180 | 2024-01-10 | GODSENT      | W   | 0.137      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     1.90 | adeX, Kvem, Lekr0, MICHU, Topa |
|            2 |     4226 | 2024-01-09 | BLEED        | L   | 0.129      | -            | -                | -                | -         |    -0.04 | adeX, Kvem, Lekr0, MICHU, Topa |
|            1 |     4236 | 2024-01-09 | Metizport    | W   | 0.129      | 0.143        | 0.073 (0.001)    | 0.587 (0.011)    | 0 (0.000) |     3.73 | adeX, Kvem, Lekr0, MICHU, Topa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
