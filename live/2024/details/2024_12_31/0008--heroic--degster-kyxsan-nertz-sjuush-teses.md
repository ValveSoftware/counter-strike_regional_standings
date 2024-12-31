### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Global Rank: [8](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [7]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1688.1<br />
<br />
Final Rank Value (1688.1) = Starting Rank Value (1774.1) + Head To Head Adjustments (-86.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.901[<sup>1</sup>](#table2)
- Bounty Collected: 0.682[<sup>2</sup>](#table1)
- Opponent Network: 0.289[<sup>2</sup>](#table1)
- LAN Wins: 0.949[<sup>2</sup>](#table1)

The average of these factors is 0.705<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1774.1
- 400 + ( ( 0.705 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1774.1


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
|           44 |      180 | 2024-12-13 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.44 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           43 |      248 | 2024-12-08 | Natus Vincere     | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.525 (0.525)    | 1 (1.000) |    18.97 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           42 |      277 | 2024-12-07 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -7.40 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           41 |      303 | 2024-12-06 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -9.03 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           40 |      322 | 2024-12-05 | FaZe              | W   | 1.000      | 1.000        | 0.853 (0.853)    | 0.513 (0.513)    | 1 (1.000) |    20.15 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           39 |      338 | 2024-12-04 | BIG               | W   | 1.000      | 1.000        | 0.230 (0.230)    | 0.504 (0.504)    | 1 (1.000) |     5.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           38 |      570 | 2024-11-23 | Passion UA        | W   | 0.957      | -            | -                | -                | 1 (0.957) |     1.47 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           37 |      604 | 2024-11-21 | Ninjas in Pyjamas | W   | 0.950      | -            | -                | -                | 1 (0.950) |     1.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           36 |      613 | 2024-11-21 | BIG               | L   | 0.945      | -            | -                | -                | -         |   -25.67 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           35 |      628 | 2024-11-20 | PARIVISION        | W   | 0.943      | -            | -                | -                | 1 (0.943) |     0.57 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           34 |     1008 | 2024-11-03 | The MongolZ       | L   | 0.827      | -            | -                | -                | -         |    -9.30 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           33 |     1040 | 2024-11-02 | OG                | W   | 0.820      | 0.898        | 0.157 (0.115)    | 0.327 (0.241)    | 1 (0.820) |     0.49 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           32 |     1186 | 2024-10-26 | fnatic            | W   | 0.772      | 0.477        | 0.189 (0.070)    | -                | -         |     1.24 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           31 |     1231 | 2024-10-23 | Ninjas in Pyjamas | W   | 0.754      | -            | -                | -                | -         |     0.85 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           30 |     1237 | 2024-10-23 | Legacy            | W   | 0.752      | 0.477        | -                | 0.479 (0.172)    | -         |     0.87 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           29 |     1264 | 2024-10-20 | ENCE              | L   | 0.733      | -            | -                | -                | -         |   -21.82 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           28 |     1292 | 2024-10-19 | B8                | W   | 0.727      | 0.589        | -                | 0.621 (0.266)    | 1 (0.727) |     1.17 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           27 |     1353 | 2024-10-17 | ENCE              | W   | 0.712      | 0.589        | 0.311 (0.130)    | -                | 1 (0.712) |     1.00 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           26 |     1364 | 2024-10-17 | Rebels            | W   | 0.711      | 0.589        | -                | 0.360 (0.150)    | 1 (0.711) |     0.23 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           25 |     1443 | 2024-10-12 | Natus Vincere     | L   | 0.680      | -            | -                | -                | -         |    -7.50 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           24 |     1506 | 2024-10-09 | Vitality          | W   | 0.660      | 0.624        | 1.000 (0.412)    | 0.411 (0.169)    | -         |    14.22 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           23 |     1543 | 2024-10-08 | Astralis          | W   | 0.653      | 0.624        | 0.305 (0.124)    | -                | -         |     2.31 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           22 |     1569 | 2024-10-07 | G2                | W   | 0.646      | 0.624        | 1.000 (0.403)    | 0.462 (0.186)    | -         |    17.12 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           21 |     2252 | 2024-09-18 | MIBR              | L   | 0.519      | -            | -                | -                | -         |   -11.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           20 |     2286 | 2024-09-17 | Virtus.pro        | W   | 0.512      | 0.889        | 0.168 (0.076)    | 0.364 (0.165)    | -         |     2.14 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           19 |     2529 | 2024-09-08 | Sangal            | W   | 0.452      | -            | -                | -                | -         |     1.31 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           18 |     2558 | 2024-09-07 | Ninjas in Pyjamas | W   | 0.446      | -            | -                | -                | -         |     0.58 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           17 |     2611 | 2024-09-05 | Sangal            | L   | 0.434      | -            | -                | -                | -         |   -12.56 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           16 |     2655 | 2024-09-04 | Lynn Vision       | W   | 0.427      | -            | -                | -                | -         |     0.21 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           15 |     2692 | 2024-09-03 | Ninjas in Pyjamas | L   | 0.419      | -            | -                | -                | -         |   -12.76 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           14 |     2819 | 2024-08-29 | Eternal Fire      | L   | 0.385      | -            | -                | -                | -         |   -10.25 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           13 |     2852 | 2024-08-28 | paiN              | L   | 0.380      | -            | -                | -                | -         |    -9.10 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           12 |     2866 | 2024-08-28 | Falcons           | W   | 0.379      | -            | -                | -                | -         |     0.31 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           11 |     2912 | 2024-08-27 | fnatic            | W   | 0.374      | -            | -                | -                | -         |     0.51 | degster, kyxsan, NertZ, sjuush, TeSeS |
|           10 |     2926 | 2024-08-27 | 3DMAX             | W   | 0.372      | -            | -                | -                | -         |     1.86 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            9 |     2984 | 2024-08-26 | B8                | W   | 0.367      | -            | -                | -                | -         |     0.43 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            8 |     3002 | 2024-08-26 | Cloud9            | L   | 0.366      | -            | -                | -                | -         |   -11.23 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            7 |     3159 | 2024-08-21 | OG                | L   | 0.333      | -            | -                | -                | -         |   -10.36 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            6 |     3545 | 2024-08-09 | FURIA             | L   | 0.253      | -            | -                | -                | -         |    -5.63 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            5 |     3566 | 2024-08-08 | 3DMAX             | W   | 0.246      | -            | -                | -                | -         |     1.22 | degster, kyxsan, NertZ, sjuush, TeSeS |
|            4 |     3618 | 2024-08-07 | MIBR              | L   | 0.239      | -            | -                | -                | -         |    -5.78 | kyxsan, NertZ, sjuush, TeSeS, Woro2k  |
|            3 |     3799 | 2024-08-02 | Complexity        | L   | 0.205      | -            | -                | -                | -         |    -5.83 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            2 |     3935 | 2024-07-30 | Spirit            | L   | 0.185      | -            | -                | -                | -         |    -1.34 | kyxsan, NertZ, sAw, sjuush, TeSeS     |
|            1 |     3957 | 2024-07-29 | Complexity        | W   | 0.179      | -            | -                | -                | -         |     0.53 | kyxsan, NertZ, sAw, sjuush, TeSeS     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($231,802.77)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.78) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $45,000.00     | $45,000.00      |
| 2024-11-03 |      0.827 | $150,000.00    | $124,038.73     |
| 2024-10-20 |      0.733 | $40,000.00     | $29,334.08      |
| 2024-10-13 |      0.687 | $20,000.00     | $13,742.36      |
| 2024-09-22 |      0.547 | $23,500.00     | $12,855.19      |
| 2024-09-01 |      0.405 | $5,000.00      | $2,025.90       |
| 2024-08-25 |      0.360 | $5,000.00      | $1,801.13       |
| 2024-08-09 |      0.254 | $4,500.00      | $1,142.27       |
| 2024-08-04 |      0.219 | $8,500.00      | $1,863.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
