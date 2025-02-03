### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [158](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [104]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  697.2<br />
<br />
Final Rank Value (697.2) = Starting Rank Value (674.0) + Head To Head Adjustments (23.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 674.0


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
|           30 |     2745 | 2024-09-14 | SINNERS           | W   | 0.253      | 0.384        | 0.090 (0.009)    | 0.750 (0.073)    | 0 (0.000) |     6.93 | lauNX, NBK-, Neityu, Nivera, reiko  |
|           29 |     2876 | 2024-09-10 | Insilio           | L   | 0.227      | -            | -                | -                | -         |    -2.79 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           28 |     2898 | 2024-09-09 | EYEBALLERS        | L   | 0.220      | -            | -                | -                | -         |    -2.25 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           27 |     2956 | 2024-09-07 | AMKAL             | W   | 0.205      | 0.384        | -                | 0.564 (0.044)    | 0 (0.000) |     2.88 | 0SAMAS, lauNX, NBK-, Nivera, reiko  |
|           26 |     2973 | 2024-09-06 | JANO              | W   | 0.200      | 0.435        | 0.035 (0.003)    | 0.118 (0.010)    | 0 (0.000) |     4.08 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           25 |     3029 | 2024-09-05 | Gaimin Gladiators | L   | 0.191      | -            | -                | -                | -         |    -1.31 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           24 |     3096 | 2024-09-03 | CYBERSHOKE        | L   | 0.178      | -            | -                | -                | -         |    -1.90 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           23 |     3109 | 2024-09-02 | FAVBET            | W   | 0.173      | 0.435        | 0.074 (0.006)    | 1.000 (0.075)    | 0 (0.000) |     4.16 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           22 |     3118 | 2024-09-02 | SINNERS           | L   | 0.171      | -            | -                | -                | -         |    -0.66 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           21 |     3149 | 2024-08-31 | ARCRED            | L   | 0.159      | -            | -                | -                | -         |    -1.86 | NBK-, Nivera, prosus, reiko, tiziaN |
|           20 |     3163 | 2024-08-30 | Sampi             | W   | 0.153      | 0.435        | 0.039 (0.003)    | 0.231 (0.015)    | 0 (0.000) |     3.85 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           19 |     3213 | 2024-08-29 | los kogutos       | L   | 0.145      | -            | -                | -                | -         |    -0.38 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           18 |     3219 | 2024-08-29 | B8                | L   | 0.145      | -            | -                | -                | -         |    -0.39 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           17 |     3317 | 2024-08-27 | Endpoint          | W   | 0.132      | 0.435        | 0.026 (0.001)    | 0.463 (0.027)    | 0 (0.000) |     2.83 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           16 |     3439 | 2024-08-25 | B8                | L   | 0.119      | -            | -                | -                | -         |    -0.31 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           15 |     3460 | 2024-08-24 | ECSTATIC          | W   | 0.113      | 0.143        | 0.081 (0.001)    | 1.000 (0.016)    | 0 (0.000) |     2.86 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           14 |     3484 | 2024-08-23 | ALASKA            | W   | 0.106      | 0.143        | 0.052 (0.001)    | 0.494 (0.008)    | 0 (0.000) |     2.68 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           13 |     3514 | 2024-08-22 | Alliance          | L   | 0.100      | -            | -                | -                | -         |    -0.59 | adeX, lauNX, NBK-, Nivera, reiko    |
|           12 |     3585 | 2024-08-21 | AMKAL             | W   | 0.092      | 0.435        | -                | 0.564 (0.022)    | 0 (0.000) |     1.37 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           11 |     3600 | 2024-08-21 | ENCE Academy      | W   | 0.091      | -            | -                | -                | 0 (0.000) |     1.79 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           10 |     3619 | 2024-08-20 | Monte Gen         | L   | 0.087      | -            | -                | -                | -         |    -0.92 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            9 |     3629 | 2024-08-20 | ex-Enterprise     | L   | 0.085      | -            | -                | -                | -         |    -0.84 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            8 |     3674 | 2024-08-18 | CYBERSHOKE        | L   | 0.073      | -            | -                | -                | -         |    -0.76 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            7 |     3720 | 2024-08-16 | Nexus             | W   | 0.060      | -            | -                | -                | -         |     0.33 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            6 |     3728 | 2024-08-16 | Sampi             | W   | 0.058      | 0.371        | 0.039 (0.001)    | -                | -         |     1.46 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            5 |     3775 | 2024-08-14 | Chimera           | W   | 0.046      | 0.435        | 0.044 (0.001)    | 0.806 (0.016)    | -         |     1.16 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            4 |     3822 | 2024-08-13 | UNiTY             | W   | 0.038      | 0.333        | 0.069 (0.001)    | -                | -         |     0.94 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            3 |     3873 | 2024-08-12 | kONO              | W   | 0.031      | -            | -                | -                | -         |     0.76 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            2 |     3891 | 2024-08-11 | UNiTY             | L   | 0.025      | -            | -                | -                | -         |    -0.17 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            1 |     3939 | 2024-08-09 | TSM               | W   | 0.012      | -            | -                | -                | -         |     0.27 | lauNX, NBK-, Nivera, reiko, tiziaN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($228.29)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
