### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, xiaosaGe<br />
Global Rank: [258](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_07_07.md)<br />
Regional Rank: [39]( ../../standings_asia_2025_07_07.md)<br />
<br />
Final Rank Value:  407.4<br />
<br />
Final Rank Value (407.4) = Starting Rank Value (400.2) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 400.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      767 | 2025-05-13 | Wings Up  | L   | 0.832      | -            | -                | -                | -         |    -2.33 | 18yM, AE, captainMo, DD, xiaosaGe |
|            4 |      790 | 2025-05-12 | GATERON   | W   | 0.826      | 0.143        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |    16.76 | 18yM, AE, captainMo, DD, xiaosaGe |
|            3 |      868 | 2025-05-09 | Shika     | L   | 0.806      | -            | -                | -                | -         |    -5.36 | 18yM, AE, captainMo, DD, xiaosaGe |
|            2 |     2005 | 2025-03-27 | Wings Up  | L   | 0.523      | -            | -                | -                | -         |    -1.72 | 18yM, AE, captainMo, DD, xiaosaGe |
|            1 |     2080 | 2025-03-26 | Rare Atom | L   | 0.516      | -            | -                | -                | -         |    -0.16 | 18yM, AE, captainMo, DD, xiaosaGe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
