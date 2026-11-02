### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, nicx, ogwizard, WUMBO<br />
Global Rank: [125](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [23]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  955.0<br />
<br />
Final Rank Value (955.0) = Starting Rank Value (875.5) + Head To Head Adjustments (79.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.5
- 400 + ( ( 0.254 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 875.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      801 | 2026-10-10 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |    -7.42 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           51 |      809 | 2026-10-10 | Elusive         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.50 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           50 |      817 | 2026-10-10 | DENDELE         | L   | 1.000      | -            | -                | -                | -         |    -1.86 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           49 |      944 | 2026-10-07 | Without a Roof  | L   | 1.000      | -            | -                | -                | -         |   -11.41 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           48 |     1222 | 2026-10-01 | Overtake Sector | W   | 0.989      | 0.333        | 0.023 (0.008)    | 0.460 (0.152)    | 0 (0.000) |     7.92 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           47 |     1315 | 2026-09-29 | LAG             | W   | 0.976      | 0.363        | 0.029 (0.010)    | 0.551 (0.195)    | 0 (0.000) |    18.92 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           46 |     1366 | 2026-09-28 | regain          | W   | 0.969      | 0.363        | 0.008 (0.003)    | 0.387 (0.136)    | 0 (0.000) |     9.39 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           45 |     1387 | 2026-09-27 | FarmVille       | W   | 0.963      | -            | -                | -                | 0 (0.000) |     5.96 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           44 |     1441 | 2026-09-26 | DETONATE        | W   | 0.956      | -            | -                | -                | 0 (0.000) |     7.31 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           43 |     1443 | 2026-09-26 | Without a Roof  | L   | 0.955      | -            | -                | -                | -         |   -11.76 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           42 |     1514 | 2026-09-25 | Sharp           | W   | 0.949      | -            | -                | -                | 0 (0.000) |     2.73 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           41 |     1528 | 2026-09-25 | regain          | L   | 0.948      | -            | -                | -                | -         |   -20.77 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           40 |     1537 | 2026-09-25 | regain          | W   | 0.947      | 0.333        | 0.008 (0.003)    | 0.387 (0.122)    | -         |     8.73 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           39 |     1665 | 2026-09-23 | Iowa Stormboar  | W   | 0.936      | -            | -                | -                | -         |     8.32 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           38 |     1735 | 2026-09-22 | FlyQuest RED    | W   | 0.929      | -            | -                | -                | -         |     1.38 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           37 |     1825 | 2026-09-20 | Iowa Stormboar  | W   | 0.915      | -            | -                | -                | -         |     8.49 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           36 |     2032 | 2026-09-15 | KODEX           | W   | 0.882      | -            | -                | -                | -         |     3.30 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           35 |     2141 | 2026-09-12 | Desi Boyz       | W   | 0.863      | -            | -                | -                | -         |     9.56 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           34 |     2149 | 2026-09-12 | Iowa Stormboar  | L   | 0.861      | -            | -                | -                | -         |   -19.50 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           33 |     2191 | 2026-09-11 | Without a Roof  | L   | 0.856      | -            | -                | -                | -         |   -10.57 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           32 |     2211 | 2026-09-11 | regain          | W   | 0.854      | -            | -                | -                | -         |     7.15 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           31 |     2247 | 2026-09-10 | Liquid          | L   | 0.850      | -            | -                | -                | -         |    -0.72 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           30 |     2253 | 2026-09-10 | Olympus         | W   | 0.849      | -            | -                | -                | -         |     2.35 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           29 |     2257 | 2026-09-10 | Without a Roof  | L   | 0.848      | -            | -                | -                | -         |   -11.63 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           28 |     2308 | 2026-09-09 | Chicken Coop    | W   | 0.843      | 0.769        | 0.020 (0.013)    | 0.184 (0.119)    | -         |     6.25 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           27 |     2492 | 2026-09-05 | LAG             | W   | 0.816      | 0.333        | 0.029 (0.008)    | 0.551 (0.150)    | -         |    16.93 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           26 |     2528 | 2026-09-04 | Incognito       | W   | 0.810      | -            | -                | -                | -         |     2.24 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           25 |     2534 | 2026-09-04 | The Homies      | W   | 0.809      | -            | -                | -                | -         |     1.31 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           24 |     2542 | 2026-09-04 | Without a Roof  | W   | 0.809      | 0.333        | 0.043 (0.012)    | 0.493 (0.133)    | -         |    16.12 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           23 |     2594 | 2026-09-03 | FarmVille       | W   | 0.802      | -            | -                | -                | -         |     5.27 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           22 |     2671 | 2026-09-01 | Voca            | L   | 0.790      | -            | -                | -                | -         |    -5.64 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           21 |     2702 | 2026-08-31 | Overtake Sector | W   | 0.783      | 0.363        | 0.023 (0.007)    | 0.460 (0.131)    | -         |     8.09 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           20 |     2741 | 2026-08-30 | Voca            | L   | 0.776      | -            | -                | -                | -         |    -5.62 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           19 |     2859 | 2026-08-28 | Chicken Coop    | W   | 0.763      | -            | -                | -                | -         |     2.64 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           18 |     2951 | 2026-08-26 | Iowa Stormboar  | W   | 0.749      | -            | -                | -                | -         |     4.83 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           17 |     3000 | 2026-08-25 | Elusive         | W   | 0.743      | -            | -                | -                | -         |     2.35 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           16 |     3674 | 2026-08-01 | SportsBetExpert | L   | 0.582      | -            | -                | -                | -         |    -2.96 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           15 |     3711 | 2026-07-31 | regain          | W   | 0.576      | 0.624        | 0.008 (0.003)    | 0.387 (0.139)    | -         |     6.63 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           14 |     3780 | 2026-07-29 | NRG             | L   | 0.562      | -            | -                | -                | -         |    -1.40 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           13 |     3804 | 2026-07-28 | LAG             | W   | 0.555      | 0.624        | 0.029 (0.010)    | 0.551 (0.191)    | -         |    12.14 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           12 |     4304 | 2026-07-09 | regain          | L   | 0.428      | -            | -                | -                | -         |    -8.69 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           11 |     4686 | 2026-06-14 | Iowa Stormboar  | W   | 0.262      | -            | -                | -                | -         |     1.72 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |     4714 | 2026-06-13 | Festina Lente   | W   | 0.255      | -            | -                | -                | -         |     1.26 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |     4763 | 2026-06-12 | Overtake Sector | W   | 0.249      | -            | -                | -                | -         |     2.49 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |     4799 | 2026-06-11 | NuTorious       | W   | 0.243      | -            | -                | -                | -         |     2.58 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |     5035 | 2026-05-31 | Chicken Coop    | L   | 0.168      | -            | -                | -                | -         |    -3.44 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     5043 | 2026-05-31 | SportsBetExpert | W   | 0.167      | -            | -                | -                | 1 (0.167) |     4.52 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     5051 | 2026-05-31 | Chicken Coop    | L   | 0.166      | -            | -                | -                | -         |    -3.42 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     5071 | 2026-05-30 | Reign Above     | W   | 0.162      | -            | -                | -                | 1 (0.162) |     0.57 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     5086 | 2026-05-30 | LAG             | W   | 0.160      | -            | -                | -                | 1 (0.160) |     3.65 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     5318 | 2026-05-24 | Overtake Sector | W   | 0.122      | -            | -                | -                | -         |     1.25 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     5322 | 2026-05-24 | SportsBetExpert | L   | 0.121      | -            | -                | -                | -         |    -0.53 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,176.15)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-07 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-09-29 |      0.976 | $8,000.00      | $7,811.54       |
| 2026-09-27 |      0.963 | $2,000.00      | $1,925.79       |
| 2026-09-13 |      0.870 | $300.00        | $260.90         |
| 2026-09-01 |      0.790 | $4,000.00      | $3,159.92       |
| 2026-06-14 |      0.262 | $3,000.00      | $785.40         |
| 2026-05-31 |      0.168 | $1,200.00      | $202.01         |
| 2026-05-24 |      0.122 | $250.00        | $30.59          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
