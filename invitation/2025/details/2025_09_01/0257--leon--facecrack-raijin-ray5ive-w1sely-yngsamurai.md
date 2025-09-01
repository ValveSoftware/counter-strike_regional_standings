### Roster Details<br />
Team Name: LEON<br />
Roster: facecrack, Raijin, RaY5ive, w1sely, yngsamurai<br />
Global Rank: [257](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  465.1<br />
<br />
Final Rank Value (465.1) = Starting Rank Value (465.7) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.137[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.034<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 465.7
- 400 + ( ( 0.034 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 465.7


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
|            7 |     3443 | 2025-03-22 | Hesta           | L   | 0.113      | -            | -                | -                | -         |    -1.49 | Chill, facecrack, Raijin, w1sely, yngsamurai   |
|            6 |     3590 | 2025-03-17 | Sangal          | L   | 0.081      | -            | -                | -                | -         |    -0.25 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            5 |     3598 | 2025-03-17 | Virtual Cottage | W   | 0.080      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.03 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            4 |     3693 | 2025-03-12 | Nuclear TigeRES | L   | 0.047      | -            | -                | -                | -         |    -0.66 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            3 |     3801 | 2025-03-09 | WOPA            | W   | 0.027      | 0.372        | 0.000 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.38 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            2 |     3876 | 2025-03-08 | HAWAII          | W   | 0.020      | 0.372        | 0.001 (0.000)    | 0.290 (0.002)    | 0 (0.000) |     0.55 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            1 |     3936 | 2025-03-07 | benched         | L   | 0.014      | -            | -                | -                | -         |    -0.18 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
