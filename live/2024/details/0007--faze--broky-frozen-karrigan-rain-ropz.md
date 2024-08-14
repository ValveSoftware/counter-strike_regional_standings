### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, frozen, karrigan, rain, ropz<br />
Global Rank: [7](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [7]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  1724.0<br />
<br />
Final Rank Value (1724.0) = Starting Rank Value (1717.7) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.797[<sup>1</sup>](#table2)
- Bounty Collected: 0.657[<sup>2</sup>](#table1)
- Opponent Network: 0.296[<sup>2</sup>](#table1)
- LAN Wins: 0.920[<sup>2</sup>](#table1)

The average of these factors is 0.668<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1717.7
- 400 + ( ( 0.668 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       30 | 2024-08-13 | Liquid            | W   | 1.000      | 1.000        | 0.432 (0.432)    | 0.462 (0.462)    | 1 (1.000) |    17.06 | broky, frozen, karrigan, rain, ropz |
|           37 |       43 | 2024-08-13 | Falcons           | W   | 1.000      | 1.000        | 0.250 (0.250)    | 0.312 (0.312)    | 1 (1.000) |     7.69 | broky, frozen, karrigan, rain, ropz |
|           36 |       87 | 2024-08-12 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -9.86 | broky, frozen, karrigan, rain, ropz |
|           35 |      139 | 2024-08-10 | Liquid            | W   | 1.000      | 1.000        | 0.432 (0.432)    | 0.462 (0.462)    | 1 (1.000) |    17.70 | broky, frozen, karrigan, rain, ropz |
|           34 |      404 | 2024-08-02 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -23.63 | broky, frozen, karrigan, rain, ropz |
|           33 |      456 | 2024-08-01 | G2                | L   | 1.000      | -            | -                | -                | -         |    -6.59 | broky, frozen, karrigan, rain, ropz |
|           32 |      504 | 2024-07-31 | Cloud9            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.12 | broky, frozen, karrigan, rain, ropz |
|           31 |      872 | 2024-07-19 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -7.69 | broky, frozen, karrigan, rain, ropz |
|           30 |     1019 | 2024-07-17 | FlyQuest          | W   | 1.000      | 1.000        | -                | 0.272 (0.272)    | 1 (1.000) |     0.99 | broky, frozen, karrigan, rain, ropz |
|           29 |     1402 | 2024-06-14 | Vitality          | L   | 0.792      | -            | -                | -                | -         |    -8.74 | broky, frozen, karrigan, rain, ropz |
|           28 |     1443 | 2024-06-13 | Natus Vincere     | L   | 0.785      | -            | -                | -                | -         |    -6.43 | broky, frozen, karrigan, rain, ropz |
|           27 |     1475 | 2024-06-12 | SAW               | W   | 0.778      | 0.729        | -                | 0.624 (0.354)    | 1 (0.778) |     2.41 | broky, frozen, karrigan, rain, ropz |
|           26 |     1950 | 2024-05-31 | G2                | L   | 0.701      | -            | -                | -                | -         |    -5.41 | broky, frozen, karrigan, rain, ropz |
|           25 |     2006 | 2024-05-29 | Spirit            | L   | 0.687      | -            | -                | -                | -         |    -8.48 | broky, frozen, karrigan, rain, ropz |
|           24 |     2027 | 2024-05-28 | Virtus.pro        | W   | 0.681      | 0.624        | 0.512 (0.217)    | -                | 1 (0.681) |     6.54 | broky, frozen, karrigan, rain, ropz |
|           23 |     2052 | 2024-05-27 | M80               | W   | 0.673      | 0.624        | -                | 0.603 (0.253)    | 1 (0.673) |     0.94 | broky, frozen, karrigan, rain, ropz |
|           22 |     2577 | 2024-05-10 | Vitality          | L   | 0.560      | -            | -                | -                | -         |    -6.64 | broky, frozen, karrigan, rain, ropz |
|           21 |     2619 | 2024-05-08 | Natus Vincere     | W   | 0.547      | 0.889        | 1.000 (0.486)    | 0.415 (0.202)    | 1 (0.547) |    13.31 | broky, frozen, karrigan, rain, ropz |
|           20 |     2636 | 2024-05-07 | Monte             | W   | 0.540      | 0.889        | -                | 0.425 (0.204)    | 1 (0.540) |     0.36 | broky, frozen, karrigan, rain, ropz |
|           19 |     2868 | 2024-04-26 | Eternal Fire      | W   | 0.466      | 0.889        | 0.701 (0.290)    | 0.442 (0.183)    | -         |     5.39 | broky, frozen, karrigan, rain, ropz |
|           18 |     2897 | 2024-04-25 | Virtus.pro        | W   | 0.460      | 0.889        | 0.512 (0.209)    | -                | -         |     4.60 | broky, frozen, karrigan, rain, ropz |
|           17 |     2916 | 2024-04-24 | Astralis          | L   | 0.453      | -            | -                | -                | -         |    -7.97 | broky, frozen, karrigan, rain, ropz |
|           16 |     2934 | 2024-04-23 | Imperial          | W   | 0.446      | 0.889        | -                | 0.653 (0.259)    | -         |     0.77 | broky, frozen, karrigan, rain, ropz |
|           15 |     3209 | 2024-04-14 | MOUZ              | W   | 0.384      | 0.624        | 1.000 (0.240)    | -                | -         |     7.71 | broky, frozen, karrigan, rain, ropz |
|           14 |     3223 | 2024-04-13 | Astralis          | W   | 0.378      | -            | -                | -                | -         |     5.38 | broky, frozen, karrigan, rain, ropz |
|           13 |     3236 | 2024-04-12 | Liquid            | W   | 0.371      | -            | -                | -                | -         |     5.51 | broky, frozen, karrigan, rain, ropz |
|           12 |     3311 | 2024-04-10 | FlyQuest          | W   | 0.358      | -            | -                | -                | -         |     0.34 | broky, frozen, karrigan, rain, ropz |
|           11 |     3326 | 2024-04-10 | Cloud9            | W   | 0.356      | -            | -                | -                | -         |     0.17 | broky, frozen, karrigan, rain, ropz |
|           10 |     3372 | 2024-04-09 | Astralis          | L   | 0.351      | -            | -                | -                | -         |    -6.16 | broky, frozen, karrigan, rain, ropz |
|            9 |     3403 | 2024-04-08 | Nemiga            | W   | 0.343      | -            | -                | -                | -         |     0.53 | broky, frozen, karrigan, rain, ropz |
|            8 |     3596 | 2024-03-31 | Natus Vincere     | L   | 0.293      | -            | -                | -                | -         |    -1.80 | broky, frozen, karrigan, rain, ropz |
|            7 |     3602 | 2024-03-30 | Vitality          | W   | 0.286      | 1.000        | 0.606 (0.173)    | -                | -         |     5.91 | broky, frozen, karrigan, rain, ropz |
|            6 |     3620 | 2024-03-28 | Spirit            | W   | 0.274      | 1.000        | 1.000 (0.274)    | -                | -         |     5.52 | broky, frozen, karrigan, rain, ropz |
|            5 |     3707 | 2024-03-24 | Complexity        | W   | 0.245      | -            | -                | -                | -         |     3.11 | broky, frozen, karrigan, rain, ropz |
|            4 |     3720 | 2024-03-23 | Imperial          | W   | 0.238      | -            | -                | -                | -         |     0.37 | broky, frozen, karrigan, rain, ropz |
|            3 |     3734 | 2024-03-22 | Eternal Fire      | L   | 0.231      | -            | -                | -                | -         |    -4.34 | broky, frozen, karrigan, rain, ropz |
|            2 |     3745 | 2024-03-21 | FURIA             | W   | 0.227      | -            | -                | -                | -         |     3.23 | broky, frozen, karrigan, rain, ropz |
|            1 |     3757 | 2024-03-21 | HEROIC            | L   | 0.225      | -            | -                | -                | -         |    -5.54 | broky, frozen, karrigan, rain, ropz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($178,366.27)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.56) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.806 | $20,000.00     | $16,117.45      |
| 2024-06-02 |      0.714 | $10,000.00     | $7,136.36       |
| 2024-05-12 |      0.572 | $32,000.00     | $18,319.64      |
| 2024-04-14 |      0.384 | $100,000.00    | $38,436.60      |
| 2024-03-31 |      0.293 | $170,000.00    | $49,856.21      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
