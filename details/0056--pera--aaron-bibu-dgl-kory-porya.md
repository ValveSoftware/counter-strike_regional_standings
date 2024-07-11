### Roster Details<br />
Team Name: PERA<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [56](../standings_global.md)<br />
Regional Rank: [40]( ../standings_europe.md)<br />
Final Rank Value:  1058.1<br />
<br />
Final Rank Value (1058.1) = Starting Rank Value (995.1) + Head To Head Adjustments (63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.406[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.282<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 995.1
- 400 + ( ( 0.282 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 995.1


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
|           41 |      252 | 2024-06-13 | Enterprise        | W   | 1.000      | 0.379        | 0.053 (0.020)    | 0.654 (0.248)    | 0 (0.000) |    13.78 | Aaron, Bibu, DGL, kory, Porya      |
|           40 |      288 | 2024-06-12 | Rebels            | W   | 1.000      | 0.379        | 0.053 (0.020)    | 0.551 (0.209)    | 0 (0.000) |    18.42 | Aaron, Bibu, DGL, kory, Porya      |
|           39 |      308 | 2024-06-11 | Czech Republic    | W   | 1.000      | 0.379        | 0.104 (0.039)    | 0.493 (0.187)    | 0 (0.000) |    22.01 | Aaron, Bibu, DGL, kory, Porya      |
|           38 |      511 | 2024-06-07 | B8                | L   | 0.973      | -            | -                | -                | -         |    -7.96 | Aaron, Bibu, DGL, kory, Porya      |
|           37 |      515 | 2024-06-07 | Aurora            | L   | 0.972      | -            | -                | -                | -         |    -1.89 | Aaron, Bibu, DGL, kory, Porya      |
|           36 |      615 | 2024-06-05 | The Prodigies     | W   | 0.961      | -            | -                | -                | 0 (0.000) |     2.63 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |      698 | 2024-06-03 | GL Academy        | W   | 0.947      | 0.379        | 0.012 (0.004)    | 0.136 (0.049)    | 0 (0.000) |     7.51 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      804 | 2024-05-30 | Rebels            | L   | 0.921      | -            | -                | -                | -         |   -11.77 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      984 | 2024-05-22 | System5           | W   | 0.867      | -            | -                | -                | 0 (0.000) |     4.25 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |     1032 | 2024-05-21 | EYEBALLERS        | W   | 0.861      | 0.500        | 0.009 (0.004)    | 0.646 (0.278)    | 0 (0.000) |    10.07 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1071 | 2024-05-20 | Romania           | W   | 0.853      | 0.379        | 0.011 (0.003)    | 0.375 (0.121)    | 0 (0.000) |     6.97 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1241 | 2024-05-15 | Norway            | W   | 0.820      | 0.500        | 0.010 (0.004)    | 0.124 (0.051)    | 0 (0.000) |     4.99 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1300 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.814      | 0.500        | 0.050 (0.020)    | 0.577 (0.235)    | -         |    14.48 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1524 | 2024-05-04 | FlyQuest          | L   | 0.746      | -            | -                | -                | -         |    -2.56 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           27 |     1539 | 2024-05-03 | BIG               | L   | 0.739      | -            | -                | -                | -         |    -2.25 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           26 |     1559 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.733      | 0.889        | 0.340 (0.222)    | 0.512 (0.334)    | 1 (0.733) |    22.73 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           25 |     1609 | 2024-04-30 | Complexity        | L   | 0.719      | -            | -                | -                | -         |    -0.21 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           24 |     1819 | 2024-04-20 | EYEBALLERS        | L   | 0.654      | -            | -                | -                | -         |   -11.87 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           23 |     2358 | 2024-04-03 | SAW               | L   | 0.540      | -            | -                | -                | -         |    -2.42 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           22 |     2413 | 2024-04-01 | RUSH B            | W   | 0.527      | 0.500        | 0.025 (0.007)    | 0.320 (0.084)    | -         |     6.38 | Aaron, Bibu, Ciocardau, DGL, Porya |
|           21 |     2690 | 2024-03-15 | Betera            | L   | 0.414      | -            | -                | -                | -         |   -10.21 | Aaron, DGL, Kamion, msN, Porya     |
|           20 |     2748 | 2024-03-13 | Monte             | L   | 0.401      | -            | -                | -                | -         |    -2.06 | Aaron, DGL, Kamion, msN, Porya     |
|           19 |     3127 | 2024-02-26 | System5           | L   | 0.294      | -            | -                | -                | -         |    -7.65 | Aaron, DGL, Kamion, msN, Porya     |
|           18 |     3265 | 2024-02-20 | ex-Preasy         | L   | 0.254      | -            | -                | -                | -         |    -5.22 | Aaron, DGL, Kamion, msN, Porya     |
|           17 |     3293 | 2024-02-19 | GamerLegion       | L   | 0.246      | -            | -                | -                | -         |    -4.11 | Aaron, DGL, Kamion, msN, Porya     |
|           16 |     3296 | 2024-02-19 | Cloud9            | L   | 0.245      | -            | -                | -                | -         |    -1.55 | Aaron, DGL, Kamion, msN, Porya     |
|           15 |     3366 | 2024-02-16 | SINNERS           | L   | 0.227      | -            | -                | -                | -         |    -2.51 | Aaron, DGL, Kamion, msN, Porya     |
|           14 |     3767 | 2024-01-25 | ex-Guild Eagles   | W   | 0.081      | -            | -                | -                | -         |     0.95 | Aaron, DGL, Kamion, msN, Porya     |
|           13 |     3780 | 2024-01-24 | Viperio           | W   | 0.074      | -            | -                | -                | -         |     0.14 | Aaron, DGL, Kamion, msN, Porya     |
|           12 |     3802 | 2024-01-23 | ALTERNATE aTTaX   | W   | 0.067      | -            | -                | -                | -         |     1.26 | Aaron, DGL, Kamion, msN, Porya     |
|           11 |     3805 | 2024-01-23 | Rebels            | W   | 0.066      | -            | -                | -                | -         |     1.27 | Aaron, DGL, Kamion, msN, Porya     |
|           10 |     3827 | 2024-01-22 | ex-Guild Eagles   | W   | 0.060      | -            | -                | -                | -         |     0.71 | Aaron, DGL, Kamion, msN, Porya     |
|            9 |     3831 | 2024-01-22 | Slovakia          | L   | 0.060      | -            | -                | -                | -         |    -1.11 | Aaron, DGL, Kamion, msN, Porya     |
|            8 |     3835 | 2024-01-22 | Viperio           | W   | 0.060      | -            | -                | -                | -         |     0.11 | Aaron, DGL, Kamion, msN, Porya     |
|            7 |     3859 | 2024-01-21 | ex-sYnck          | W   | 0.053      | -            | -                | -                | -         |     0.10 | Aaron, DGL, Kamion, msN, Porya     |
|            6 |     3864 | 2024-01-21 | Gaimin Gladiators | L   | 0.053      | -            | -                | -                | -         |    -0.52 | Aaron, DGL, Kamion, msN, Porya     |
|            5 |     3888 | 2024-01-20 | KOI               | L   | 0.047      | -            | -                | -                | -         |    -0.38 | Aaron, DGL, Kamion, msN, Porya     |
|            4 |     3898 | 2024-01-20 | Astralis          | L   | 0.046      | -            | -                | -                | -         |    -0.01 | Aaron, DGL, Kamion, msN, Porya     |
|            3 |     3959 | 2024-01-19 | IKLA              | W   | 0.039      | -            | -                | -                | -         |     0.08 | Aaron, DGL, Kamion, msN, Porya     |
|            2 |     4005 | 2024-01-18 | EYEBALLERS        | W   | 0.034      | -            | -                | -                | -         |     0.45 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4028 | 2024-01-18 | Eternal Fire      | L   | 0.033      | -            | -                | -                | -         |    -0.02 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,987.60)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-13 |      1.000 | $10,895.00     | $10,895.00      |
| 2024-06-09 |      0.987 | $500.00        | $493.61         |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
