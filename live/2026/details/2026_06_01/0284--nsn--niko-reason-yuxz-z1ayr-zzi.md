### Roster Details<br />
Team Name: NSN<br />
Roster: Niko, reason, Yuxz, z1ayr, zzi<br />
Global Rank: [284](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  586.7<br />
<br />
Final Rank Value (586.7) = Starting Rank Value (531.7) + Head To Head Adjustments (55.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.7
- 400 + ( ( 0.069 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 531.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1779 | 2026-04-06 | NEXVOID           | L   | 0.826      | -            | -                | -                | -         |    -1.30 | Niko, reason, Yuxz, z1ayr, zzi |
|            6 |     1829 | 2026-04-05 | Chinggis Warriors | L   | 0.819      | -            | -                | -                | -         |    -1.25 | Niko, reason, Yuxz, z1ayr, zzi |
|            5 |     1977 | 2026-04-03 | The QUBE          | W   | 0.806      | 0.333        | 0.004 (0.001)    | 0.259 (0.070)    | 0 (0.000) |    20.98 | Niko, reason, Yuxz, z1ayr, zzi |
|            4 |     2087 | 2026-04-02 | NEXVOID           | W   | 0.799      | 0.333        | 0.013 (0.004)    | 0.408 (0.109)    | 0 (0.000) |    24.01 | Niko, reason, Yuxz, z1ayr, zzi |
|            3 |     2832 | 2026-03-22 | Haunted House     | L   | 0.727      | -            | -                | -                | -         |    -3.81 | Niko, reason, Yuxz, z1ayr, zzi |
|            2 |     2891 | 2026-03-21 | FengDa            | L   | 0.719      | -            | -                | -                | -         |    -5.33 | Niko, reason, Yuxz, z1ayr, zzi |
|            1 |     2954 | 2026-03-20 | Chinggis Warriors | W   | 0.713      | 0.333        | 0.018 (0.004)    | 0.486 (0.115)    | 0 (0.000) |    21.70 | Niko, reason, Yuxz, z1ayr, zzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
