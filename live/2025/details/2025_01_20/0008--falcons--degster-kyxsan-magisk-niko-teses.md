### Roster Details<br />
Team Name: Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [8](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1696.6<br />
<br />
Final Rank Value (1696.6) = Starting Rank Value (1788.5) + Head To Head Adjustments (-91.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.945[<sup>1</sup>](#table2)
- Bounty Collected: 0.665[<sup>2</sup>](#table1)
- Opponent Network: 0.251[<sup>2</sup>](#table1)
- LAN Wins: 0.936[<sup>2</sup>](#table1)

The average of these factors is 0.699<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1788.5
- 400 + ( ( 0.699 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1788.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |        3 | 2025-01-19 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -27.75 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           41 |       17 | 2025-01-15 | ENCE              | W   | 1.000      | -            | -                | -                | -         |     1.47 | degster, kyxsan, Magisk, NiKo, TeSeS  |
|           40 |      249 | 2024-12-13 | G2                | L   | 0.950      | -            | -                | -                | -         |    -6.08 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      317 | 2024-12-08 | Natus Vincere     | W   | 0.916      | 1.000        | 1.000 (0.916)    | 0.570 (0.522)    | 1 (0.916) |    14.78 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      346 | 2024-12-07 | Spirit            | L   | 0.910      | -            | -                | -                | -         |    -7.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      372 | 2024-12-06 | The MongolZ       | L   | 0.904      | -            | -                | -                | -         |    -9.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      391 | 2024-12-05 | FaZe              | W   | 0.897      | 1.000        | 1.000 (0.897)    | 0.558 (0.500)    | 1 (0.897) |    18.46 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      407 | 2024-12-04 | BIG               | W   | 0.896      | 1.000        | 0.299 (0.268)    | 0.493 (0.441)    | 1 (0.896) |     3.80 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |      639 | 2024-11-23 | Passion UA        | W   | 0.816      | -            | -                | -                | 1 (0.816) |     0.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |      673 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.809      | -            | -                | -                | 1 (0.809) |     0.72 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |      682 | 2024-11-21 | BIG               | L   | 0.804      | -            | -                | -                | -         |   -22.47 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |      697 | 2024-11-20 | PARIVISION        | W   | 0.802      | -            | -                | -                | 1 (0.802) |     0.26 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1077 | 2024-11-03 | The MongolZ       | L   | 0.686      | -            | -                | -                | -         |    -8.37 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1109 | 2024-11-02 | OG                | W   | 0.679      | 0.898        | 0.171 (0.104)    | 0.285 (0.174)    | 1 (0.679) |     0.28 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1255 | 2024-10-26 | fnatic            | W   | 0.631      | -            | -                | -                | -         |     0.69 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1300 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.613      | -            | -                | -                | -         |     0.46 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1306 | 2024-10-23 | Legacy            | W   | 0.611      | 0.477        | -                | 0.500 (0.145)    | -         |     0.49 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1333 | 2024-10-20 | ENCE              | L   | 0.592      | -            | -                | -                | -         |   -17.92 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1361 | 2024-10-19 | B8                | W   | 0.586      | 0.589        | 0.162 (0.056)    | 0.490 (0.169)    | 1 (0.586) |     0.63 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1422 | 2024-10-17 | ENCE              | W   | 0.572      | 0.589        | 0.336 (0.113)    | 0.323 (0.109)    | 1 (0.572) |     0.60 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1433 | 2024-10-17 | Rebels            | W   | 0.570      | -            | -                | -                | 1 (0.570) |     0.11 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     1512 | 2024-10-12 | Natus Vincere     | L   | 0.539      | -            | -                | -                | -         |    -8.01 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     1575 | 2024-10-09 | Vitality          | W   | 0.519      | 0.624        | 0.944 (0.306)    | 0.496 (0.161)    | -         |     9.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     1612 | 2024-10-08 | Astralis          | W   | 0.512      | 0.624        | 0.325 (0.104)    | -                | -         |     1.18 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     1638 | 2024-10-07 | G2                | W   | 0.505      | 0.624        | 1.000 (0.315)    | 0.501 (0.158)    | -         |    12.66 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2321 | 2024-09-18 | MIBR              | L   | 0.378      | -            | -                | -                | -         |    -8.91 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2355 | 2024-09-17 | Virtus.pro        | W   | 0.371      | 0.889        | 0.164 (0.054)    | 0.383 (0.126)    | -         |     0.97 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2598 | 2024-09-08 | HEROIC            | W   | 0.312      | -            | -                | -                | -         |     0.47 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2627 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.305      | -            | -                | -                | -         |     0.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2680 | 2024-09-05 | HEROIC            | L   | 0.293      | -            | -                | -                | -         |    -8.82 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2724 | 2024-09-04 | Lynn Vision       | W   | 0.286      | -            | -                | -                | -         |     0.11 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2761 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.279      | -            | -                | -                | -         |    -8.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2888 | 2024-08-29 | Eternal Fire      | L   | 0.244      | -            | -                | -                | -         |    -7.04 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     2921 | 2024-08-28 | paiN              | L   | 0.239      | -            | -                | -                | -         |    -6.20 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     2935 | 2024-08-28 | Falcons           | W   | 0.238      | -            | -                | -                | -         |     0.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     2981 | 2024-08-27 | fnatic            | W   | 0.233      | -            | -                | -                | -         |     0.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     2995 | 2024-08-27 | 3DMAX             | W   | 0.231      | -            | -                | -                | -         |     0.80 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3053 | 2024-08-26 | B8                | W   | 0.226      | -            | -                | -                | -         |     0.19 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3071 | 2024-08-26 | Cloud9            | L   | 0.225      | -            | -                | -                | -         |    -6.96 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            3 |     3228 | 2024-08-21 | OG                | L   | 0.192      | -            | -                | -                | -         |    -6.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            2 |     3614 | 2024-08-09 | FURIA             | L   | 0.112      | -            | -                | -                | -         |    -2.64 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            1 |     3635 | 2024-08-08 | 3DMAX             | W   | 0.105      | -            | -                | -                | -         |     0.36 | degster, kyxsan, NertZ, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($193,376.63)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.87) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.964 | $45,000.00     | $43,372.63      |
| 2024-11-03 |      0.686 | $150,000.00    | $102,908.30     |
| 2024-10-20 |      0.592 | $40,000.00     | $23,699.30      |
| 2024-10-13 |      0.546 | $20,000.00     | $10,924.97      |
| 2024-09-22 |      0.406 | $23,500.00     | $9,544.76       |
| 2024-09-01 |      0.264 | $5,000.00      | $1,321.55       |
| 2024-08-25 |      0.219 | $5,000.00      | $1,096.78       |
| 2024-08-09 |      0.113 | $4,500.00      | $508.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
