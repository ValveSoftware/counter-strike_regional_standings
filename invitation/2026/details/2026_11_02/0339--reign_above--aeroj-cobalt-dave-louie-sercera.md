### Roster Details<br />
Team Name: Reign Above<br />
Roster: AEROj, cobalt, dAVE, louie, SeRCEra<br />
Global Rank: [339](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [73]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  498.0<br />
<br />
Final Rank Value (498.0) = Starting Rank Value (504.4) + Head To Head Adjustments (-6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 504.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      890 | 2026-10-08 | Villainous      | L   | 1.000      | -            | -                | -                | -         |    -9.30 | cobalt, dAVE, flyingBison, louie, Nifty |
|            6 |      950 | 2026-10-07 | Overtake Sector | L   | 1.000      | -            | -                | -                | -         |    -5.94 | cobalt, dAVE, flyingBison, louie, Nifty |
|            5 |     5050 | 2026-05-31 | SportsBetExpert | L   | 0.166      | -            | -                | -                | -         |    -0.11 | AEROj, cobalt, dAVE, louie, SeRCEra     |
|            4 |     5067 | 2026-05-30 | NuTorious       | W   | 0.162      | 0.294        | 0.003 (0.000)    | 0.195 (0.009)    | 1 (0.162) |     4.12 | AEROj, cobalt, dAVE, louie, SeRCEra     |
|            3 |     5071 | 2026-05-30 | Marsborne       | L   | 0.162      | -            | -                | -                | -         |    -0.57 | AEROj, cobalt, dAVE, louie, SeRCEra     |
|            2 |     5080 | 2026-05-30 | Wanted Goons    | W   | 0.161      | 0.294        | 0.000 (0.000)    | 0.148 (0.007)    | 1 (0.161) |     3.47 | AEROj, cobalt, dAVE, louie, SeRCEra     |
|            1 |     5091 | 2026-05-30 | FRZ             | W   | 0.160      | 0.294        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.160) |     1.85 | AEROj, cobalt, dAVE, louie, SeRCEra     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
