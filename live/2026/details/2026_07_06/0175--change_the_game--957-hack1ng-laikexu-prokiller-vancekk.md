### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [175](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [19]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  790.3<br />
<br />
Final Rank Value (790.3) = Starting Rank Value (782.3) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.263[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.3
- 400 + ( ( 0.203 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 782.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1304 | 2026-05-13 | Haunted House     | L   | 0.838      | -            | -                | -                | -         |   -14.21 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           25 |     1330 | 2026-05-12 | Last Bullet       | W   | 0.833      | 0.548        | 0.002 (0.001)    | 0.206 (0.094)    | 1 (0.833) |    13.78 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           24 |     1369 | 2026-05-11 | SemperFi          | L   | 0.826      | -            | -                | -                | -         |    -6.71 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           23 |     2569 | 2026-04-04 | 5star             | L   | 0.579      | -            | -                | -                | -         |    -3.72 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           22 |     2572 | 2026-04-04 | TYLOO             | L   | 0.579      | -            | -                | -                | -         |    -0.55 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           21 |     2649 | 2026-04-03 | FengDa            | L   | 0.573      | -            | -                | -                | -         |   -10.61 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           20 |     2657 | 2026-04-03 | Rare Atom         | W   | 0.572      | 0.352        | 0.006 (0.001)    | 0.249 (0.050)    | 1 (0.572) |    12.25 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |     2666 | 2026-04-03 | TYLOO             | L   | 0.572      | -            | -                | -                | -         |    -0.47 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |     2759 | 2026-04-02 | Eruption          | W   | 0.566      | 0.333        | -                | 0.000 (0.000)    | 0 (0.000) |     1.72 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |     2763 | 2026-04-02 | Last Bullet       | W   | 0.565      | 0.352        | 0.002 (0.000)    | 0.206 (0.041)    | 1 (0.565) |     9.91 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |     3011 | 2026-03-30 | Lynn Vision       | L   | 0.546      | -            | -                | -                | -         |    -0.85 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |     3022 | 2026-03-30 | Last Bullet       | W   | 0.545      | 0.352        | 0.002 (0.000)    | 0.206 (0.039)    | 1 (0.545) |     9.95 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |     3553 | 2026-03-21 | Haunted House     | L   | 0.486      | -            | -                | -                | -         |    -8.33 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     3616 | 2026-03-20 | 5star             | L   | 0.480      | -            | -                | -                | -         |    -2.56 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     4073 | 2026-03-10 | Kaleido           | L   | 0.412      | -            | -                | -                | -         |    -5.03 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           11 |     4079 | 2026-03-09 | Chaos             | W   | 0.410      | 0.769        | 0.001 (0.000)    | -                | 0 (0.000) |     2.22 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           10 |     4148 | 2026-03-08 | Chinggis Warriors | L   | 0.403      | -            | -                | -                | -         |    -2.95 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            9 |     4765 | 2026-02-24 | Kaleido           | L   | 0.320      | -            | -                | -                | -         |    -4.05 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            8 |     4814 | 2026-02-23 | Last Bullet       | W   | 0.313      | 0.333        | 0.002 (0.000)    | 0.206 (0.021)    | 0 (0.000) |     6.01 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            7 |     4877 | 2026-02-22 | The QUBE          | W   | 0.307      | 0.333        | 0.003 (0.000)    | 0.201 (0.021)    | 0 (0.000) |     4.13 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            6 |     4939 | 2026-02-21 | Chinggis Warriors | W   | 0.300      | 0.333        | 0.015 (0.001)    | 0.388 (0.039)    | 0 (0.000) |     7.48 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            5 |     4989 | 2026-02-20 | Legion            | W   | 0.293      | 0.333        | 0.000 (0.000)    | 0.087 (0.009)    | 0 (0.000) |     2.92 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            4 |     5048 | 2026-02-19 | 100RA             | W   | 0.286      | -            | -                | -                | -         |     0.96 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            3 |     5101 | 2026-02-18 | BORING PLAYERS    | L   | 0.280      | -            | -                | -                | -         |    -5.02 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            2 |     5157 | 2026-02-17 | Arise             | W   | 0.274      | 0.333        | 0.000 (0.000)    | 0.046 (0.004)    | -         |     2.15 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            1 |     6245 | 2026-01-17 | Chinggis Warriors | L   | 0.065      | -            | -                | -                | -         |    -0.42 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,643.07)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.586 | $1,438.00      | $842.48         |
| 2026-02-24 |      0.320 | $2,500.00      | $800.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
