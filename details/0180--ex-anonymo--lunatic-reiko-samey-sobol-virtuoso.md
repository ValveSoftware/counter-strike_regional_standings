### Roster Details<br />
Team Name: ex-Anonymo<br />
Roster: lunAtic, reiko, SaMey, Sobol, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [180](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  601.4<br />
<br />
Final Rank Value (601.4) = Starting Rank Value (599.5) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.205[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.098<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.5
- 400 + ( ( 0.098 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 599.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     3357 | 2024-02-10 | The Chosen Few | L   | 0.343      | -            | -                | -                | -         |    -3.93 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           15 |     3363 | 2024-02-10 | FURIA          | L   | 0.342      | -            | -                | -                | -         |    -0.03 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           14 |     3367 | 2024-02-10 | Apeks          | L   | 0.341      | -            | -                | -                | -         |    -0.58 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           13 |     3458 | 2024-02-03 | Young Ninjas   | L   | 0.296      | -            | -                | -                | -         |    -2.15 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           12 |     3971 | 2024-01-16 | JANO           | L   | 0.177      | -            | -                | -                | -         |    -3.70 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|           11 |     3980 | 2024-01-16 | LEON           | W   | 0.176      | 0.143        | 0.008 (0.000)    | 0.165 (0.004)    | 0 (0.000) |     3.55 | eightz999, facecrack, JIaYm, k0s, Z1W0W        |
|           10 |     4079 | 2024-01-13 | OG             | L   | 0.156      | -            | -                | -                | -         |    -0.18 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            9 |     4081 | 2024-01-13 | FAVBET         | W   | 0.155      | 0.143        | 0.005 (0.000)    | 0.397 (0.009)    | 0 (0.000) |     3.57 | bondik, guthriee, j3kie, Smash, t3ns1on        |
|            8 |     4121 | 2024-01-12 | Lausanne SE    | W   | 0.150      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.14 | Diviiii, Razzmo, SBT, Shr, xReal               |
|            7 |     4162 | 2024-01-11 | PERA           | L   | 0.143      | -            | -                | -                | -         |    -0.48 | Aaron, DGL, Kamion, msN, Porya                 |
|            6 |     4171 | 2024-01-11 | Betera         | W   | 0.142      | 0.143        | 0.002 (0.000)    | 0.089 (0.002)    | 0 (0.000) |     2.96 | alex666, lollipop21k, MaSvAl, nifee, sad       |
|            5 |     4181 | 2024-01-10 | CYBERSHOKE     | W   | 0.137      | 0.143        | 0.002 (0.000)    | 0.038 (0.001)    | 0 (0.000) |     2.73 | fen2k, FenomeN, flamie, Re1GN, sh1nejezzz      |
|            4 |     4239 | 2024-01-09 | kONO           | L   | 0.129      | -            | -                | -                | -         |    -0.87 | byr9, kensizor, munch, Polbandana, s4ltovsk1yy |
|            3 |     4273 | 2023-12-23 | Spirit Academy | L   | 0.014      | -            | -                | -                | -         |    -0.17 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            2 |     4274 | 2023-12-22 | NAVI Junior    | W   | 0.007      | 0.333        | 0.007 (0.000)    | 0.071 (0.000)    | 0 (0.000) |     0.14 | lunAtic, reiko, SaMey, Sobol, virtuoso         |
|            1 |     4277 | 2023-12-21 | Spirit Academy | L   | 0.001      | -            | -                | -                | -         |    -0.01 | lunAtic, reiko, SaMey, Sobol, virtuoso         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40.83)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
