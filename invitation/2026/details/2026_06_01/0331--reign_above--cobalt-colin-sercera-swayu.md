### Roster Details<br />
Team Name: Reign Above<br />
Roster: cobalt, colin, SeRCEra, swayu<br />
Global Rank: [331](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  502.3<br />
<br />
Final Rank Value (502.3) = Starting Rank Value (494.4) + Head To Head Adjustments (7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.4
- 400 + ( ( 0.050 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 494.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4689 | 2026-02-13 | Iowa Stormboar | L   | 0.483      | -            | -                | -                | -         |    -2.43 | cobalt, colin, ryn, SeRCEra, swayu        |
|            6 |     4847 | 2026-02-09 | insane players | L   | 0.456      | -            | -                | -                | -         |    -2.78 | cobalt, colin, ryn, SeRCEra, swayu        |
|            5 |     4926 | 2026-02-06 | FlyQuest RED   | W   | 0.436      | 0.333        | 0.000 (0.000)    | 0.034 (0.005)    | 0 (0.000) |     8.64 | cobalt, colin, ryn, SeRCEra, swayu        |
|            4 |     5041 | 2026-02-02 | LAG            | L   | 0.410      | -            | -                | -                | -         |    -0.33 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            3 |     5820 | 2026-01-03 | Marsborne      | L   | 0.208      | -            | -                | -                | -         |    -0.27 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            2 |     5825 | 2026-01-03 | EMPIRE         | W   | 0.208      | 0.323        | 0.002 (0.000)    | 0.213 (0.014)    | 1 (0.208) |     5.31 | cobalt, colin, SayYouWill, SeRCEra, swayu |
|            1 |     5833 | 2026-01-03 | Marsborne      | L   | 0.207      | -            | -                | -                | -         |    -0.26 | cobalt, colin, SayYouWill, SeRCEra, swayu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
