### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [152](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [20]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  872.3<br />
<br />
Final Rank Value (872.3) = Starting Rank Value (845.4) + Head To Head Adjustments (26.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 845.4
- 400 + ( ( 0.240 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 845.4


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
|           27 |      922 | 2026-04-04 | 5star             | L   | 0.999      | -            | -                | -                | -         |    -6.81 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           26 |      925 | 2026-04-04 | TYLOO             | L   | 0.999      | -            | -                | -                | -         |    -1.89 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           25 |     1002 | 2026-04-03 | FengDa            | L   | 0.992      | -            | -                | -                | -         |   -15.90 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           24 |     1010 | 2026-04-03 | Rare Atom         | W   | 0.992      | 0.352        | 0.021 (0.007)    | 0.422 (0.147)    | 1 (0.992) |    23.23 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           23 |     1019 | 2026-04-03 | TYLOO             | L   | 0.991      | -            | -                | -                | -         |    -1.49 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           22 |     1112 | 2026-04-02 | Eruption          | W   | 0.986      | 0.333        | -                | 0.000 (0.000)    | 0 (0.000) |     2.03 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           21 |     1116 | 2026-04-02 | Last Bullet       | W   | 0.985      | 0.352        | 0.006 (0.002)    | 0.280 (0.097)    | 1 (0.985) |    17.09 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           20 |     1364 | 2026-03-30 | Lynn Vision       | L   | 0.966      | -            | -                | -                | -         |    -4.04 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |     1375 | 2026-03-30 | Last Bullet       | W   | 0.965      | 0.352        | 0.006 (0.002)    | 0.280 (0.095)    | 1 (0.965) |    17.92 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |     1906 | 2026-03-21 | Haunted House     | L   | 0.906      | -            | -                | -                | -         |   -20.06 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |     1969 | 2026-03-20 | 5star             | L   | 0.899      | -            | -                | -                | -         |    -4.77 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |     2426 | 2026-03-10 | Kaleido           | L   | 0.831      | -            | -                | -                | -         |    -9.87 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |     2432 | 2026-03-09 | Chaos             | W   | 0.830      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     3.14 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |     2501 | 2026-03-08 | Chinggis Warriors | L   | 0.823      | -            | -                | -                | -         |    -5.54 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     3118 | 2026-02-24 | Kaleido           | L   | 0.740      | -            | -                | -                | -         |    -9.45 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     3167 | 2026-02-23 | Last Bullet       | W   | 0.733      | 0.333        | 0.006 (0.001)    | 0.280 (0.068)    | 0 (0.000) |    14.52 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           11 |     3230 | 2026-02-22 | The QUBE          | W   | 0.726      | 0.333        | 0.007 (0.002)    | 0.313 (0.076)    | 0 (0.000) |    10.46 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           10 |     3292 | 2026-02-21 | Chinggis Warriors | W   | 0.720      | 0.333        | 0.022 (0.005)    | 0.543 (0.130)    | 0 (0.000) |    18.92 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            9 |     3342 | 2026-02-20 | Legion            | W   | 0.713      | 0.333        | 0.002 (0.000)    | 0.214 (0.051)    | -         |     7.21 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            8 |     3401 | 2026-02-19 | 100RA             | W   | 0.706      | -            | -                | -                | -         |     1.76 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            7 |     3454 | 2026-02-18 | BORING PLAYERS    | L   | 0.699      | -            | -                | -                | -         |   -12.64 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            6 |     3510 | 2026-02-17 | Arise             | W   | 0.693      | 0.333        | 0.001 (0.000)    | 0.109 (0.025)    | -         |     5.10 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            5 |     4598 | 2026-01-17 | Chinggis Warriors | L   | 0.484      | -            | -                | -                | -         |    -2.24 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK   |
|            4 |     5704 | 2025-11-12 | Gentle Mates      | L   | 0.050      | -            | -                | -                | -         |    -0.10 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            3 |     5782 | 2025-11-10 | Rare Atom         | L   | 0.033      | -            | -                | -                | -         |    -0.15 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            2 |     5869 | 2025-11-08 | Rare Atom         | W   | 0.019      | 0.379        | 0.021 (0.000)    | 0.422 (0.003)    | 1 (0.019) |     0.51 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |
|            1 |     6014 | 2025-11-06 | GATERON           | W   | 0.004      | -            | -                | -                | 1 (0.004) |     0.01 | 957, Hack1ng, LaiKeXu, VanceKK, Zero      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,440.90)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $1,438.00      | $1,438.00       |
| 2026-02-24 |      0.740 | $2,500.00      | $1,849.72       |
| 2025-11-16 |      0.071 | $1,404.00      | $99.88          |
| 2025-11-13 |      0.053 | $1,000.00      | $53.30          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
