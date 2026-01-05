### Roster Details<br />
Team Name: Keyd Stars<br />
Roster: desh, fl4sh, leo_drk, ninjaZ, vinaabEAST<br />
Global Rank: [280](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [79]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  491.8<br />
<br />
Final Rank Value (491.8) = Starting Rank Value (493.7) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.7
- 400 + ( ( 0.047 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 493.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3973 | 2025-08-13 | GameHunters    | L   | 0.235      | -            | -                | -                | -         |    -2.75 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|           13 |     4000 | 2025-08-13 | Crashers       | L   | 0.233      | -            | -                | -                | -         |    -2.99 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|           12 |     4048 | 2025-08-12 | Dusty Roots    | L   | 0.227      | -            | -                | -                | -         |    -0.65 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|           11 |     4081 | 2025-08-11 | Dusty Roots    | L   | 0.222      | -            | -                | -                | -         |    -0.64 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|           10 |     4124 | 2025-08-10 | KRÜ            | L   | 0.215      | -            | -                | -                | -         |    -1.47 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            9 |     4183 | 2025-08-08 | Yawara         | W   | 0.199      | 0.371        | 0.003 (0.000)    | 0.247 (0.018)    | 0 (0.000) |     5.45 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            8 |     4248 | 2025-08-03 | RED Canids     | L   | 0.166      | -            | -                | -                | -         |    -0.19 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            7 |     4572 | 2025-07-16 | Sharks         | L   | 0.048      | -            | -                | -                | -         |    -0.01 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            6 |     4580 | 2025-07-16 | Galorys        | W   | 0.047      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.55 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            5 |     4686 | 2025-07-11 | 9z             | L   | 0.016      | -            | -                | -                | -         |    -0.01 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            4 |     4692 | 2025-07-11 | Bounty Hunters | W   | 0.015      | 0.616        | 0.016 (0.000)    | 0.477 (0.004)    | 0 (0.000) |     0.41 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            3 |     4698 | 2025-07-11 | Sharks         | L   | 0.014      | -            | -                | -                | -         |    -0.00 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            2 |     4703 | 2025-07-11 | Fake do Biru   | W   | 0.013      | 0.376        | 0.014 (0.000)    | 0.383 (0.002)    | 0 (0.000) |     0.37 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |
|            1 |     4727 | 2025-07-10 | Keyd Stars     | L   | 0.007      | -            | -                | -                | -         |    -0.01 | desh, fl4sh, leo_drk, ninjaZ, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
