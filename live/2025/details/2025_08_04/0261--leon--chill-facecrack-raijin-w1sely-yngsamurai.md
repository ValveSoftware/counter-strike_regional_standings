### Roster Details<br />
Team Name: LEON<br />
Roster: Chill, facecrack, Raijin, w1sely, yngsamurai<br />
Global Rank: [261](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [136]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  481.7<br />
<br />
Final Rank Value (481.7) = Starting Rank Value (480.8) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.8
- 400 + ( ( 0.043 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 480.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2753 | 2025-03-22 | Hesta           | L   | 0.300      | -            | -                | -                | -         |    -4.07 | Chill, facecrack, Raijin, w1sely, yngsamurai   |
|            6 |     2900 | 2025-03-17 | Sangal          | L   | 0.267      | -            | -                | -                | -         |    -0.80 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            5 |     2908 | 2025-03-17 | Virtual Cottage | W   | 0.266      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     3.20 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            4 |     3003 | 2025-03-12 | Nuclear TigeRES | L   | 0.233      | -            | -                | -                | -         |    -3.38 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            3 |     3111 | 2025-03-09 | WOPA            | W   | 0.213      | 0.372        | 0.000 (0.000)    | 0.045 (0.004)    | 0 (0.000) |     2.95 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            2 |     3186 | 2025-03-08 | NXT             | W   | 0.206      | 0.372        | 0.001 (0.000)    | 0.320 (0.025)    | 0 (0.000) |     5.78 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            1 |     3246 | 2025-03-07 | benched         | L   | 0.200      | -            | -                | -                | -         |    -2.82 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
