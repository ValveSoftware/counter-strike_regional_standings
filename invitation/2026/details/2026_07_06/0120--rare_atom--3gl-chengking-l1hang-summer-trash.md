### Roster Details<br />
Team Name: Rare Atom<br />
Roster: 3gl, chengking, L1haNg, Summer, Trash<br />
Global Rank: [120](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [12]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  914.0<br />
<br />
Final Rank Value (914.0) = Starting Rank Value (927.0) + Head To Head Adjustments (-13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.447[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.0
- 400 + ( ( 0.280 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 927.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     1337 | 2026-05-12 | Ground Zero       | L   | 0.832      | -            | -                | -                | -         |   -17.29 | 3gl, chengking, L1haNg, Summer, Trash       |
|           35 |     1378 | 2026-05-11 | 5star             | L   | 0.825      | -            | -                | -                | -         |    -8.73 | 3gl, chengking, L1haNg, Summer, Trash       |
|           34 |     1698 | 2026-04-30 | TYLOO             | L   | 0.753      | -            | -                | -                | -         |    -1.88 | 3gl, chengking, L1haNg, Summer, Trash       |
|           33 |     1749 | 2026-04-29 | The QUBE          | W   | 0.746      | 0.333        | 0.003 (0.001)    | 0.201 (0.050)    | 0 (0.000) |     6.96 | 3gl, chengking, L1haNg, Summer, Trash       |
|           32 |     1789 | 2026-04-28 | Kaleido           | W   | 0.740      | 0.333        | 0.015 (0.004)    | 0.238 (0.059)    | 0 (0.000) |     9.86 | 3gl, chengking, L1haNg, Summer, Trash       |
|           31 |     1834 | 2026-04-27 | Legion            | W   | 0.733      | -            | -                | -                | -         |     3.93 | 3gl, chengking, L1haNg, Summer, Trash       |
|           30 |     1887 | 2026-04-26 | Just Swing        | L   | 0.727      | -            | -                | -                | -         |   -17.40 | 3gl, chengking, L1haNg, Summer, Trash       |
|           29 |     2588 | 2026-04-04 | TYLOO             | L   | 0.578      | -            | -                | -                | -         |    -1.09 | chengking, L1haNg, Summer, Tiger, x9        |
|           28 |     2591 | 2026-04-03 | SemperFi          | W   | 0.577      | 0.354        | 0.008 (0.002)    | 0.247 (0.050)    | 1 (0.577) |    10.50 | chengking, L1haNg, Summer, Tiger, x9        |
|           27 |     2657 | 2026-04-03 | Change The Game   | L   | 0.572      | -            | -                | -                | -         |   -12.25 | chengking, L1haNg, Summer, Tiger, x9        |
|           26 |     2673 | 2026-04-03 | Lynn Vision       | L   | 0.571      | -            | -                | -                | -         |    -1.96 | chengking, L1haNg, Summer, Tiger, x9        |
|           25 |     2753 | 2026-04-02 | Just Swing        | W   | 0.566      | 0.352        | -                | 0.236 (0.047)    | 1 (0.566) |     4.23 | chengking, L1haNg, Summer, Tiger, x9        |
|           24 |     2772 | 2026-04-02 | XDM               | W   | 0.565      | -            | -                | -                | 1 (0.565) |     1.44 | chengking, L1haNg, Summer, Tiger, x9        |
|           23 |     2865 | 2026-03-31 | Chinggis Warriors | L   | 0.557      | -            | -                | -                | -         |    -7.35 | chengking, L1haNg, Summer, Tiger, x9        |
|           22 |     2928 | 2026-03-31 | TYLOO             | L   | 0.553      | -            | -                | -                | -         |    -0.92 | chengking, L1haNg, Summer, Tiger, x9        |
|           21 |     2951 | 2026-03-31 | BORING PLAYERS    | W   | 0.552      | 0.352        | -                | 0.168 (0.033)    | 1 (0.552) |     4.03 | chengking, L1haNg, Summer, Tiger, x9        |
|           20 |     3276 | 2026-03-25 | Kaleido           | W   | 0.518      | 0.284        | 0.015 (0.002)    | 0.238 (0.035)    | 1 (0.518) |     6.93 | chengking, L1haNg, Summer, Tiger, x9        |
|           19 |     3327 | 2026-03-25 | Last Bullet       | W   | 0.512      | 0.284        | 0.002 (0.000)    | -                | 1 (0.512) |     6.22 | chengking, L1haNg, Summer, Tiger, x9        |
|           18 |     3329 | 2026-03-25 | Kaleido           | L   | 0.511      | -            | -                | -                | -         |    -9.35 | chengking, L1haNg, Summer, Tiger, x9        |
|           17 |     3386 | 2026-03-24 | Last Bullet       | W   | 0.505      | -            | -                | -                | 1 (0.505) |     6.07 | chengking, L1haNg, Summer, Tiger, x9        |
|           16 |     3490 | 2026-03-22 | Kaleido           | L   | 0.494      | -            | -                | -                | -         |    -9.19 | chengking, L1haNg, Summer, Tiger, x9        |
|           15 |     3506 | 2026-03-22 | Lynn Vision       | L   | 0.492      | -            | -                | -                | -         |    -1.71 | chengking, L1haNg, Summer, Tiger, x9        |
|           14 |     3550 | 2026-03-21 | Legion            | W   | 0.487      | -            | -                | -                | -         |     2.53 | chengking, L1haNg, Summer, Tiger, x9        |
|           13 |     3567 | 2026-03-21 | Last Bullet       | W   | 0.485      | -            | -                | -                | 1 (0.485) |     6.05 | chengking, L1haNg, Summer, Tiger, x9        |
|           12 |     3613 | 2026-03-20 | Alter Ego         | L   | 0.480      | -            | -                | -                | -         |    -9.52 | chengking, L1haNg, Summer, Tiger, x9        |
|           11 |     4026 | 2026-03-11 | FlyQuest          | L   | 0.419      | -            | -                | -                | -         |    -3.55 | chengking, L1haNg, Summer, Tiger, x9        |
|           10 |     4031 | 2026-03-10 | DEPO              | W   | 0.417      | 0.769        | 0.007 (0.002)    | 0.269 (0.086)    | -         |     7.76 | chengking, L1haNg, Summer, Tiger, x9        |
|            9 |     4136 | 2026-03-09 | Alter Ego         | L   | 0.405      | -            | -                | -                | -         |    -8.37 | chengking, L1haNg, Summer, Tiger, x9        |
|            8 |     4146 | 2026-03-08 | Ground Zero       | W   | 0.404      | 0.769        | 0.003 (0.001)    | -                | -         |     3.53 | chengking, L1haNg, Summer, Tiger, x9        |
|            7 |     4623 | 2026-02-27 | The Huns          | L   | 0.339      | -            | -                | -                | -         |    -3.17 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            6 |     4674 | 2026-02-26 | Lynn Vision       | W   | 0.333      | 0.624        | 0.148 (0.031)    | 0.412 (0.086)    | -         |     9.45 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            5 |     4705 | 2026-02-25 | The Huns          | W   | 0.330      | 0.624        | 0.043 (0.009)    | 0.413 (0.085)    | -         |     7.36 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            4 |     5576 | 2026-02-07 | TYLOO             | L   | 0.206      | -            | -                | -                | -         |    -0.34 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            3 |     5618 | 2026-02-06 | 5star             | W   | 0.199      | 0.769        | 0.019 (0.003)    | 0.324 (0.050)    | -         |     4.53 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            2 |     6040 | 2026-01-23 | JiJieHao          | L   | 0.105      | -            | -                | -                | -         |    -0.48 | chengking, ChildKing, L1haNg, Summer, Tiger |
|            1 |     6183 | 2026-01-18 | UR                | W   | 0.073      | -            | -                | -                | -         |     0.11 | chengking, ChildKing, L1haNg, Summer, Tiger |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,113.41)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.586 | $1,438.00      | $842.48         |
| 2026-04-05 |      0.585 | $1,500.00      | $877.36         |
| 2026-03-25 |      0.518 | $1,650.00      | $853.95         |
| 2026-03-22 |      0.492 | $750.00        | $368.63         |
| 2026-01-25 |      0.119 | $1,433.00      | $170.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
