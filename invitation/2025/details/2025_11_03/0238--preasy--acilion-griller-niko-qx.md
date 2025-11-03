### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Griller, niko, qx<br />
Global Rank: [238](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [133]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  509.8<br />
<br />
Final Rank Value (509.8) = Starting Rank Value (500.1) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.1
- 400 + ( ( 0.053 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 500.1


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
|            6 |     3451 | 2025-06-14 | Passion UA   | L   | 0.253      | -            | -                | -                | -         |    -0.78 | AcilioN, Griller, niko, qx, SinK   |
|            5 |     3467 | 2025-06-14 | Tricked      | W   | 0.252      | 0.360        | 0.001 (0.000)    | 0.464 (0.042)    | 1 (0.252) |     6.60 | AcilioN, Griller, niko, qx, SinK   |
|            4 |     3483 | 2025-06-13 | Inner Circle | L   | 0.247      | -            | -                | -                | -         |    -0.09 | AcilioN, Griller, niko, qx, SinK   |
|            3 |     3583 | 2025-06-08 | TPuDCATb TPu | L   | 0.214      | -            | -                | -                | -         |    -0.57 | AcilioN, bekker, Griller, niko, qx |
|            2 |     3612 | 2025-06-07 | UNiTY        | W   | 0.205      | 0.384        | 0.002 (0.000)    | 0.431 (0.034)    | 0 (0.000) |     5.06 | AcilioN, bekker, Griller, niko, qx |
|            1 |     3618 | 2025-06-06 | TPuDCATb TPu | L   | 0.200      | -            | -                | -                | -         |    -0.51 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
