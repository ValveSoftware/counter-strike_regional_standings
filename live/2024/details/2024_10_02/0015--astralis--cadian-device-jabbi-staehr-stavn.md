### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, device, jabbi, Staehr, stavn<br />
Global Rank: [15](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [11]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  1380.6<br />
<br />
Final Rank Value (1380.6) = Starting Rank Value (1361.4) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.643[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.665[<sup>2</sup>](#table1)

The average of these factors is 0.502<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1361.4
- 400 + ( ( 0.502 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 1361.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      230 | 2024-09-26 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -2.01 | cadiaN, device, jabbi, Staehr, stavn |
|           36 |      289 | 2024-09-25 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.78 | cadiaN, device, jabbi, Staehr, stavn |
|           35 |      626 | 2024-09-14 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -9.57 | br0, device, jabbi, Staehr, stavn    |
|           34 |      668 | 2024-09-13 | Rooster           | W   | 1.000      | 0.889        | -                | 0.263 (0.234)    | 1 (1.000) |     0.86 | br0, device, jabbi, Staehr, stavn    |
|           33 |      729 | 2024-09-11 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -10.21 | br0, device, jabbi, Staehr, stavn    |
|           32 |      765 | 2024-09-10 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -23.15 | br0, device, jabbi, Staehr, stavn    |
|           31 |     1735 | 2024-08-12 | G2                | L   | 0.860      | -            | -                | -                | -         |    -1.49 | br0, device, jabbi, Staehr, stavn    |
|           30 |     1769 | 2024-08-11 | Natus Vincere     | L   | 0.852      | -            | -                | -                | -         |    -1.36 | br0, device, jabbi, Staehr, stavn    |
|           29 |     1788 | 2024-08-10 | 9z                | W   | 0.846      | 1.000        | 0.254 (0.215)    | 0.428 (0.362)    | 1 (0.846) |    10.07 | br0, device, jabbi, Staehr, stavn    |
|           28 |     1998 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.805      | 0.581        | 0.159 (0.075)    | 0.287 (0.134)    | 1 (0.805) |     9.01 | br0, device, jabbi, Staehr, stavn    |
|           27 |     2027 | 2024-08-03 | Vitality          | L   | 0.799      | -            | -                | -                | -         |    -1.97 | br0, device, jabbi, Staehr, stavn    |
|           26 |     2068 | 2024-08-02 | Falcons           | W   | 0.792      | 0.581        | 0.274 (0.126)    | 0.411 (0.189)    | 1 (0.792) |    12.71 | br0, device, jabbi, Staehr, stavn    |
|           25 |     2193 | 2024-07-30 | Vitality          | L   | 0.772      | -            | -                | -                | -         |    -1.82 | br0, device, jabbi, Staehr, stavn    |
|           24 |     2221 | 2024-07-29 | Falcons           | W   | 0.767      | 0.581        | 0.274 (0.122)    | 0.411 (0.183)    | 1 (0.767) |    13.04 | br0, device, jabbi, Staehr, stavn    |
|           23 |     3046 | 2024-06-14 | Virtus.pro        | L   | 0.467      | -            | -                | -                | -         |    -4.58 | br0, device, jabbi, Staehr, stavn    |
|           22 |     3105 | 2024-06-13 | SAW               | W   | 0.458      | 0.729        | 0.263 (0.088)    | 0.705 (0.235)    | 1 (0.458) |     5.78 | br0, device, jabbi, Staehr, stavn    |
|           21 |     3128 | 2024-06-12 | Natus Vincere     | L   | 0.452      | -            | -                | -                | -         |    -0.52 | br0, device, jabbi, Staehr, stavn    |
|           20 |     3286 | 2024-06-08 | The MongolZ       | L   | 0.426      | -            | -                | -                | -         |    -1.82 | br0, device, jabbi, Staehr, stavn    |
|           19 |     3337 | 2024-06-07 | BetBoom           | W   | 0.419      | 0.715        | 0.206 (0.062)    | 0.488 (0.146)    | 1 (0.419) |     3.44 | br0, device, jabbi, Staehr, stavn    |
|           18 |     3398 | 2024-06-06 | The MongolZ       | W   | 0.413      | 0.715        | 0.676 (0.200)    | 0.528 (0.156)    | 1 (0.413) |    11.41 | br0, device, jabbi, Staehr, stavn    |
|           17 |     3418 | 2024-06-06 | ENCE              | W   | 0.411      | -            | -                | -                | 1 (0.411) |     2.10 | br0, device, jabbi, Staehr, stavn    |
|           16 |     3424 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.411      | -            | -                | -                | -         |    -8.43 | br0, device, jabbi, Staehr, stavn    |
|           15 |     3469 | 2024-06-05 | Sashi             | L   | 0.405      | -            | -                | -                | -         |   -11.19 | br0, device, jabbi, Staehr, stavn    |
|           14 |     3481 | 2024-06-05 | HEROIC            | W   | 0.404      | -            | -                | -                | 1 (0.404) |     6.81 | br0, device, jabbi, Staehr, stavn    |
|           13 |     3828 | 2024-05-22 | Liquid            | L   | 0.311      | -            | -                | -                | -         |    -2.01 | br0, device, jabbi, Staehr, stavn    |
|           12 |     3870 | 2024-05-21 | Aurora            | W   | 0.305      | 0.769        | -                | 0.526 (0.123)    | -         |     3.02 | br0, device, jabbi, Staehr, stavn    |
|           11 |     3900 | 2024-05-20 | BetBoom           | W   | 0.300      | 0.769        | -                | 0.488 (0.112)    | -         |     2.12 | br0, device, jabbi, Staehr, stavn    |
|           10 |     3923 | 2024-05-19 | BIG               | W   | 0.293      | -            | -                | -                | -         |     3.66 | br0, device, jabbi, Staehr, stavn    |
|            9 |     4215 | 2024-05-11 | Vitality          | L   | 0.239      | -            | -                | -                | -         |    -0.43 | br0, device, jabbi, Staehr, stavn    |
|            8 |     4236 | 2024-05-10 | Liquid            | W   | 0.232      | 0.889        | 0.410 (0.085)    | -                | -         |     5.93 | br0, device, jabbi, Staehr, stavn    |
|            7 |     4502 | 2024-04-27 | 3DMAX             | W   | 0.146      | -            | -                | -                | -         |     3.54 | br0, device, jabbi, Staehr, stavn    |
|            6 |     4572 | 2024-04-24 | FaZe              | W   | 0.126      | 0.889        | 0.533 (0.060)    | -                | -         |     3.40 | br0, device, jabbi, Staehr, stavn    |
|            5 |     4593 | 2024-04-23 | Eternal Fire      | W   | 0.119      | 0.889        | 0.974 (0.103)    | -                | -         |     3.55 | br0, device, jabbi, Staehr, stavn    |
|            4 |     4879 | 2024-04-13 | FaZe              | L   | 0.051      | -            | -                | -                | -         |    -0.23 | br0, device, jabbi, Staehr, stavn    |
|            3 |     4976 | 2024-04-10 | Virtus.pro        | W   | 0.031      | -            | -                | -                | -         |     0.70 | br0, device, jabbi, Staehr, stavn    |
|            2 |     5028 | 2024-04-09 | FaZe              | W   | 0.024      | -            | -                | -                | -         |     0.65 | br0, device, jabbi, Staehr, stavn    |
|            1 |     5060 | 2024-04-08 | Steel Helmet      | W   | 0.017      | -            | -                | -                | -         |     0.01 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,363.11)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-29 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-09-22 |      1.000 | $7,000.00      | $7,000.00       |
| 2024-08-18 |      0.900 | $16,000.00     | $14,399.99      |
| 2024-08-04 |      0.806 | $12,500.00     | $10,069.60      |
| 2024-06-16 |      0.479 | $20,000.00     | $9,586.00       |
| 2024-06-09 |      0.433 | $28,000.00     | $12,114.00      |
| 2024-05-23 |      0.319 | $50,000.00     | $15,971.41      |
| 2024-05-12 |      0.246 | $45,000.00     | $11,066.23      |
| 2024-04-14 |      0.058 | $20,000.00     | $1,155.87       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
