### Roster Details<br />
Team Name: LEON<br />
Roster: Chill, facecrack, Raijin, w1sely, yngsamurai<br />
Global Rank: [255](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  519.3<br />
<br />
Final Rank Value (519.3) = Starting Rank Value (514.8) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.8
- 400 + ( ( 0.063 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 514.8


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
|            7 |      946 | 2025-03-22 | Hesta           | L   | 0.906      | -            | -                | -                | -         |   -11.78 | Chill, facecrack, Raijin, w1sely, yngsamurai   |
|            6 |     1038 | 2025-03-17 | Aurora          | L   | 0.874      | -            | -                | -                | -         |    -4.26 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            5 |     1046 | 2025-03-17 | Virtual Cottage | W   | 0.873      | 0.143        | 0.000 (0.000)    | 0.069 (0.009)    | 0 (0.000) |     9.02 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            4 |     1131 | 2025-03-12 | Nuclear TigeRES | L   | 0.840      | -            | -                | -                | -         |   -13.03 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            3 |     1233 | 2025-03-09 | WOPA            | W   | 0.820      | 0.372        | 0.008 (0.003)    | 0.206 (0.063)    | 0 (0.000) |    17.24 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            2 |     1307 | 2025-03-08 | ALASKA          | W   | 0.813      | 0.372        | 0.012 (0.004)    | 0.278 (0.084)    | 0 (0.000) |    19.66 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |
|            1 |     1363 | 2025-03-07 | benched         | L   | 0.807      | -            | -                | -                | -         |   -12.27 | facecrack, Raijin, RaY5ive, w1sely, yngsamurai |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
