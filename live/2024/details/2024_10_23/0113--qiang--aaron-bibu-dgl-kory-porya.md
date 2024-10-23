### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [113](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [78]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  825.1<br />
<br />
Final Rank Value (825.1) = Starting Rank Value (772.9) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 772.9
- 400 + ( ( 0.190 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 772.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1876 | 2024-08-23 | Insilio           | L   | 0.791      | -            | -                | -                | -         |    -9.69 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1906 | 2024-08-22 | BIG               | L   | 0.784      | -            | -                | -                | -         |    -0.81 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1934 | 2024-08-21 | SAW               | L   | 0.779      | -            | -                | -                | -         |    -0.61 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1965 | 2024-08-21 | Sashi             | W   | 0.778      | 0.143        | 0.115 (0.013)    | 0.653 (0.073)    | 0 (0.000) |    18.79 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     2321 | 2024-08-09 | Sashi             | L   | 0.697      | -            | -                | -                | -         |    -5.03 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     2335 | 2024-08-08 | Permitta          | W   | 0.692      | 0.426        | 0.036 (0.011)    | 1.000 (0.295)    | 0 (0.000) |    15.14 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2633 | 2024-07-31 | B8                | L   | 0.640      | -            | -                | -                | -         |    -2.30 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2682 | 2024-07-30 | Space             | W   | 0.633      | 0.500        | 0.002 (0.001)    | 0.414 (0.131)    | 0 (0.000) |     9.87 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2717 | 2024-07-29 | ARCRED            | L   | 0.626      | -            | -                | -                | -         |    -8.51 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     3042 | 2024-07-19 | Nexus             | L   | 0.559      | -            | -                | -                | -         |    -9.34 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     3075 | 2024-07-18 | Nemiga            | L   | 0.554      | -            | -                | -                | -         |    -0.43 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     3154 | 2024-07-17 | Verdant           | W   | 0.547      | 0.333        | 0.014 (0.003)    | 0.262 (0.048)    | 0 (0.000) |     9.29 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     3210 | 2024-07-16 | Aurora            | L   | 0.540      | -            | -                | -                | -         |    -1.59 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     3261 | 2024-07-15 | Betera            | W   | 0.533      | 0.333        | -                | 0.105 (0.019)    | 0 (0.000) |     4.01 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3578 | 2024-06-13 | ex-Enterprise     | W   | 0.320      | 0.379        | 0.025 (0.003)    | 0.434 (0.053)    | 0 (0.000) |     5.91 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3614 | 2024-06-12 | Rebels            | W   | 0.313      | 0.379        | 0.063 (0.007)    | 0.516 (0.061)    | 0 (0.000) |     6.93 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3634 | 2024-06-11 | ECLOT             | W   | 0.307      | 0.379        | 0.095 (0.011)    | 0.707 (0.082)    | 0 (0.000) |     8.90 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3837 | 2024-06-07 | B8                | L   | 0.279      | -            | -                | -                | -         |    -0.88 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3841 | 2024-06-07 | Aurora            | L   | 0.278      | -            | -                | -                | -         |    -0.72 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3941 | 2024-06-05 | The Prodigies     | W   | 0.267      | 0.379        | 0.008 (0.001)    | -                | 0 (0.000) |     2.98 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     4024 | 2024-06-03 | GL Academy        | W   | 0.254      | -            | -                | -                | -         |     1.50 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     4130 | 2024-05-30 | Rebels            | L   | 0.227      | -            | -                | -                | -         |    -2.11 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     4310 | 2024-05-22 | System5           | W   | 0.174      | -            | -                | -                | -         |     1.57 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     4358 | 2024-05-21 | EYEBALLERS        | W   | 0.167      | -            | -                | -                | -         |     2.17 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4397 | 2024-05-20 | Nexus             | W   | 0.159      | 0.379        | 0.005 (0.000)    | 0.513 (0.031)    | -         |     2.67 | Aaron, Bibu, DGL, kory, Porya      |
|            6 |     4567 | 2024-05-15 | Norway            | W   | 0.126      | -            | -                | -                | -         |     1.12 | Aaron, Bibu, DGL, kory, Porya      |
|            5 |     4626 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.120      | 0.500        | 0.081 (0.005)    | 0.794 (0.048)    | -         |     3.00 | Aaron, Bibu, DGL, kory, Porya      |
|            4 |     4850 | 2024-05-04 | FlyQuest          | L   | 0.052      | -            | -                | -                | -         |    -0.09 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4865 | 2024-05-03 | BIG               | L   | 0.045      | -            | -                | -                | -         |    -0.03 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4885 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.039      | -            | -                | -                | 1 (0.039) |     0.47 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4935 | 2024-04-30 | Complexity        | L   | 0.026      | -            | -                | -                | -         |    -0.01 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,087.20)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.566 | $1,250.00      | $707.77         |
| 2024-06-13 |      0.320 | $10,895.00     | $3,490.78       |
| 2024-06-09 |      0.293 | $500.00        | $146.68         |
| 2024-05-12 |      0.106 | $7,000.00      | $741.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
