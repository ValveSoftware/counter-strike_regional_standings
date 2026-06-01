### Roster Details<br />
Team Name: FRZ<br />
Roster: brawckzz, j3nni, Jachro, Sharpie, toasty<br />
Global Rank: [336](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [88]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  491.3<br />
<br />
Final Rank Value (491.3) = Starting Rank Value (486.6) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.6
- 400 + ( ( 0.045 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 486.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       28 | 2026-05-30 | F5          | L   | 1.000      | -            | -                | -                | -         |    -3.73 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            7 |       39 | 2026-05-30 | NXG         | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |    14.15 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            6 |       50 | 2026-05-30 | Reign Above | L   | 1.000      | -            | -                | -                | -         |    -7.71 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            5 |     1270 | 2026-04-25 | Marsborne   | L   | 0.955      | -            | -                | -                | -         |    -1.59 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            4 |     1293 | 2026-04-25 | Wildcard    | L   | 0.954      | -            | -                | -                | -         |    -0.20 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            3 |     2470 | 2026-03-28 | F5          | L   | 0.768      | -            | -                | -                | -         |    -2.68 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            2 |     2486 | 2026-03-28 | Aura        | W   | 0.767      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.767) |     9.06 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            1 |     2500 | 2026-03-28 | F5          | L   | 0.767      | -            | -                | -                | -         |    -2.57 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
