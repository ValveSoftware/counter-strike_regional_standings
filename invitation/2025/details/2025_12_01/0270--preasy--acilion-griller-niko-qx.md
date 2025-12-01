### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Griller, niko, qx<br />
Global Rank: [270](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [153]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  482.6<br />
<br />
Final Rank Value (482.6) = Starting Rank Value (481.1) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.1
- 400 + ( ( 0.043 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 481.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4472 | 2025-06-14 | Passion UA   | L   | 0.067      | -            | -                | -                | -         |    -0.35 | AcilioN, Griller, niko, qx, SinK   |
|            5 |     4488 | 2025-06-14 | Tricked      | W   | 0.066      | 0.360        | 0.000 (0.000)    | 0.215 (0.005)    | 1 (0.066) |     1.39 | AcilioN, Griller, niko, qx, SinK   |
|            4 |     4504 | 2025-06-13 | Inner Circle | L   | 0.061      | -            | -                | -                | -         |    -0.01 | AcilioN, Griller, niko, qx, SinK   |
|            3 |     4604 | 2025-06-08 | TPuDCATb TPu | L   | 0.027      | -            | -                | -                | -         |    -0.04 | AcilioN, bekker, Griller, niko, qx |
|            2 |     4633 | 2025-06-07 | UNiTY        | W   | 0.019      | 0.384        | 0.010 (0.000)    | 0.433 (0.003)    | 0 (0.000) |     0.54 | AcilioN, bekker, Griller, niko, qx |
|            1 |     4639 | 2025-06-06 | TPuDCATb TPu | L   | 0.014      | -            | -                | -                | -         |    -0.02 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
