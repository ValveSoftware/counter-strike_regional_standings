### Roster Details<br />
Team Name: Tricked<br />
Roster: kroK, leakz, niko, salazar<br />
Global Rank: [310](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  489.4<br />
<br />
Final Rank Value (489.4) = Starting Rank Value (485.5) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.5
- 400 + ( ( 0.045 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 485.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4762 | 2025-09-16 | FAVBET           | L   | 0.087      | -            | -                | -                | -         |    -0.18 | anber, kroK, leakz, niko, salazar   |
|            6 |     4850 | 2025-09-14 | ex-Zero Tenacity | W   | 0.071      | 0.435        | 0.002 (0.000)    | 0.210 (0.006)    | 0 (0.000) |     1.80 | anber, kroK, leakz, niko, salazar   |
|            5 |     4919 | 2025-09-12 | OG               | L   | 0.060      | -            | -                | -                | -         |    -0.16 | kroK, leakz, niko, Nodios, salazar  |
|            4 |     4980 | 2025-09-11 | AaB              | W   | 0.053      | 0.435        | 0.001 (0.000)    | 0.132 (0.003)    | 0 (0.000) |     1.31 | kroK, leakz, niko, Nodios, salazar  |
|            3 |     5017 | 2025-09-10 | Spirit Academy   | W   | 0.047      | 0.384        | 0.011 (0.000)    | 0.073 (0.001)    | 0 (0.000) |     1.20 | kroK, leakz, niko, Nodios, salazar  |
|            2 |     5038 | 2025-09-10 | Nemesis          | L   | 0.046      | -            | -                | -                | -         |    -0.01 | anber, kroK, leakz, niko, salazar   |
|            1 |     5121 | 2025-09-08 | JiJieHao         | L   | 0.034      | -            | -                | -                | -         |    -0.07 | kroK, leakz, Nodios, salazar, valde |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
