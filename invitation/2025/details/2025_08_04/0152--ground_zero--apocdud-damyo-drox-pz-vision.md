### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, damyo, Drox, pz, vision<br />
Global Rank: [152](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_04.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_08_04.md)<br />
<br />
Final Rank Value:  670.8<br />
<br />
Final Rank Value (670.8) = Starting Rank Value (688.5) + Head To Head Adjustments (-17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.5
- 400 + ( ( 0.152 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 688.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       29 | 2025-08-01 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -4.22 | apocdud, damyo, Drox, pz, vision       |
|           35 |      259 | 2025-07-17 | SemperFi          | L   | 1.000      | -            | -                | -                | -         |   -10.21 | apocdud, damyo, Drox, pz, vision       |
|           34 |      287 | 2025-07-16 | Animus Victoria   | W   | 1.000      | 0.314        | -                | 0.099 (0.031)    | 0 (0.000) |    10.21 | apocdud, damyo, Drox, pz, vision       |
|           33 |      308 | 2025-07-15 | KZG               | L   | 1.000      | -            | -                | -                | -         |   -15.76 | apocdud, damyo, Drox, pz, vision       |
|           32 |      373 | 2025-07-12 | FURY              | W   | 1.000      | 0.314        | 0.001 (0.000)    | 0.181 (0.057)    | 0 (0.000) |    13.58 | apocdud, damyo, Drox, pz, vision       |
|           31 |      409 | 2025-07-11 | FengDa            | L   | 1.000      | -            | -                | -                | -         |   -13.51 | apocdud, damyo, Drox, pz, vision       |
|           30 |     1569 | 2025-05-03 | Mindfreak         | L   | 0.579      | -            | -                | -                | -         |   -10.06 | apocdud, damyo, Drox, pz, vision       |
|           29 |     1587 | 2025-05-02 | Rooster           | L   | 0.572      | -            | -                | -                | -         |    -8.57 | apocdud, damyo, Drox, pz, vision       |
|           28 |     1610 | 2025-05-01 | Mindfreak         | W   | 0.565      | 0.333        | 0.003 (0.000)    | 0.145 (0.027)    | 0 (0.000) |     7.66 | apocdud, damyo, Drox, pz, vision       |
|           27 |     2071 | 2025-04-09 | FURY              | W   | 0.418      | 0.333        | 0.001 (0.000)    | 0.181 (0.025)    | 0 (0.000) |     5.53 | apocdud, damyo, Drox, pz, vision       |
|           26 |     2077 | 2025-04-09 | FURY              | L   | 0.418      | -            | -                | -                | -         |    -7.83 | apocdud, damyo, Drox, pz, yourwombat   |
|           25 |     2304 | 2025-04-02 | Only One Word     | W   | 0.372      | 0.333        | 0.001 (0.000)    | 0.122 (0.015)    | 0 (0.000) |     5.55 | apocdud, damyo, Drox, pz, yourwombat   |
|           24 |     2309 | 2025-04-02 | Only One Word     | W   | 0.372      | 0.333        | 0.001 (0.000)    | 0.122 (0.015)    | 0 (0.000) |     5.73 | apocdud, damyo, Drox, pz, yourwombat   |
|           23 |     2467 | 2025-03-28 | ex-TALON          | L   | 0.344      | -            | -                | -                | -         |    -5.04 | alecc, apocdud, damyo, gump, pz        |
|           22 |     2524 | 2025-03-28 | Rooster           | L   | 0.338      | -            | -                | -                | -         |    -5.00 | alecc, apocdud, damyo, gump, pz        |
|           21 |     2604 | 2025-03-27 | FURY              | W   | 0.331      | 0.143        | -                | 0.181 (0.009)    | 0 (0.000) |     4.24 | alecc, apocdud, damyo, pz, yourwombat  |
|           20 |     2652 | 2025-03-26 | KZG               | W   | 0.325      | 0.333        | 0.001 (0.000)    | 0.043 (0.005)    | 0 (0.000) |     3.69 | apocdud, damyo, pz, vision, yourwombat |
|           19 |     2654 | 2025-03-26 | KZG               | W   | 0.325      | -            | -                | -                | -         |     3.78 | apocdud, damyo, pz, vision, yourwombat |
|           18 |     2733 | 2025-03-22 | SemperFi          | L   | 0.303      | -            | -                | -                | -         |    -3.64 | apocdud, BRACE, damyo, pz, yourwombat  |
|           17 |     2763 | 2025-03-21 | Rooster           | L   | 0.296      | -            | -                | -                | -         |    -4.32 | apocdud, BRACE, damyo, pz, yourwombat  |
|           16 |     2779 | 2025-03-21 | ex-TALON          | W   | 0.291      | 0.345        | 0.002 (0.000)    | 0.167 (0.017)    | 1 (0.291) |     4.82 | apocdud, BRACE, damyo, pz, yourwombat  |
|           15 |     2780 | 2025-03-20 | Mindfreak         | W   | 0.290      | 0.345        | 0.004 (0.000)    | -                | 1 (0.290) |     3.92 | apocdud, BRACE, damyo, pz, yourwombat  |
|           14 |     2914 | 2025-03-17 | Rooster           | W   | 0.265      | 0.333        | 0.010 (0.001)    | 0.267 (0.024)    | -         |     4.63 | apocdud, BRACE, damyo, pz, yourwombat  |
|           13 |     2915 | 2025-03-17 | Rooster           | L   | 0.265      | -            | -                | -                | -         |    -3.77 | apocdud, BRACE, damyo, pz, yourwombat  |
|           12 |     3400 | 2025-03-03 | Lynn Vision       | L   | 0.172      | -            | -                | -                | -         |    -0.06 | apocdud, BRACE, damyo, pz, yourwombat  |
|           11 |     3415 | 2025-03-02 | HEROIC            | L   | 0.166      | -            | -                | -                | -         |    -0.05 | apocdud, BRACE, damyo, pz, yourwombat  |
|           10 |     3438 | 2025-03-01 | paiN              | L   | 0.161      | -            | -                | -                | -         |    -0.04 | apocdud, BRACE, damyo, pz, yourwombat  |
|            9 |     3743 | 2025-02-19 | LE-LUX            | W   | 0.092      | -            | -                | -                | -         |     1.05 | apocdud, BRACE, damyo, pz, yourwombat  |
|            8 |     3746 | 2025-02-19 | LE-LUX            | W   | 0.092      | -            | -                | -                | -         |     1.05 | apocdud, BRACE, damyo, pz, yourwombat  |
|            7 |     3777 | 2025-02-18 | Mindfreak         | W   | 0.085      | 0.333        | 0.004 (0.000)    | -                | -         |     1.19 | apocdud, BRACE, damyo, pz, yourwombat  |
|            6 |     3778 | 2025-02-18 | Mindfreak         | L   | 0.085      | -            | -                | -                | -         |    -1.50 | apocdud, BRACE, damyo, pz, yourwombat  |
|            5 |     3824 | 2025-02-15 | KZG               | W   | 0.070      | -            | -                | -                | -         |     0.84 | apocdud, BRACE, damyo, pz, yourwombat  |
|            4 |     3859 | 2025-02-14 | Vantage           | L   | 0.064      | -            | -                | -                | -         |    -1.52 | apocdud, BRACE, damyo, pz, yourwombat  |
|            3 |     3864 | 2025-02-14 | BBBMBCBS          | W   | 0.063      | -            | -                | -                | -         |     0.33 | apocdud, BRACE, damyo, pz, yourwombat  |
|            2 |     4027 | 2025-02-08 | Wings Up          | L   | 0.024      | -            | -                | -                | -         |    -0.29 | apocdud, BRACE, damyo, pz, SkulL       |
|            1 |     4092 | 2025-02-07 | JiJieHao          | L   | 0.017      | -            | -                | -                | -         |    -0.08 | apocdud, BRACE, damyo, pz, yourwombat  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,094.45)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-18 |      1.000 | $328.00        | $328.00         |
| 2025-05-04 |      0.585 | $1,400.00      | $819.30         |
| 2025-03-23 |      0.305 | $1,254.00      | $382.47         |
| 2025-03-05 |      0.188 | $3,000.00      | $564.68         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
