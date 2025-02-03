### Roster Details<br />
Team Name: Cloud9<br />
Roster: Ax1Le, Boombl4, HeavyGod, ICY, interz<br />
Global Rank: [49](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1048.6<br />
<br />
Final Rank Value (1048.6) = Starting Rank Value (987.7) + Head To Head Adjustments (60.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.353[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.7
- 400 + ( ( 0.303 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 987.7


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
|           29 |      789 | 2024-12-02 | Complexity        | L   | 0.777      | -            | -                | -                | -         |    -6.24 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           28 |      809 | 2024-11-30 | paiN              | L   | 0.770      | -            | -                | -                | -         |    -2.75 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           27 |      838 | 2024-11-30 | fnatic            | W   | 0.764      | 0.143        | 0.176 (0.019)    | 0.326 (0.036)    | 1 (0.764) |    14.09 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           26 |      843 | 2024-11-29 | Liquid            | L   | 0.763      | -            | -                | -                | -         |    -0.97 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           25 |     1040 | 2024-11-19 | FaZe              | L   | 0.692      | -            | -                | -                | -         |    -0.26 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           24 |     1046 | 2024-11-18 | SINNERS           | W   | 0.690      | 0.143        | 0.090 (0.009)    | 0.750 (0.074)    | 1 (0.690) |    10.71 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           23 |     1059 | 2024-11-17 | HEROIC            | W   | 0.683      | 0.143        | 0.288 (0.028)    | 0.352 (0.034)    | 1 (0.683) |    16.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           22 |     1070 | 2024-11-17 | Nemiga            | W   | 0.678      | 0.143        | 0.480 (0.046)    | 0.545 (0.053)    | 1 (0.678) |    16.15 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           21 |     1083 | 2024-11-16 | FaZe              | L   | 0.677      | -            | -                | -                | -         |    -0.19 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           20 |     1603 | 2024-10-25 | fnatic            | L   | 0.525      | -            | -                | -                | -         |    -6.36 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           19 |     1631 | 2024-10-22 | 9z                | W   | 0.506      | 0.477        | 0.051 (0.012)    | 0.168 (0.041)    | 0 (0.000) |     5.99 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           18 |     1637 | 2024-10-22 | The MongolZ       | L   | 0.505      | -            | -                | -                | -         |    -0.14 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           17 |     1855 | 2024-10-11 | Passion UA        | L   | 0.431      | -            | -                | -                | -         |    -4.79 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           16 |     2791 | 2024-09-13 | Gaimin Gladiators | L   | 0.245      | -            | -                | -                | -         |    -4.88 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           15 |     2954 | 2024-09-07 | Zero Tenacity     | W   | 0.206      | 0.384        | 0.078 (0.006)    | 0.715 (0.057)    | 0 (0.000) |     3.40 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           14 |     2978 | 2024-09-06 | BetBoom           | W   | 0.200      | 0.384        | 0.230 (0.018)    | 0.518 (0.040)    | 0 (0.000) |     3.97 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           13 |     3025 | 2024-09-05 | ALTERNATE aTTaX   | W   | 0.192      | 0.384        | 0.066 (0.005)    | 0.643 (0.047)    | 0 (0.000) |     3.44 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           12 |     3117 | 2024-09-02 | GamerLegion       | W   | 0.172      | -            | -                | -                | 0 (0.000) |     1.18 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           11 |     3199 | 2024-08-29 | Insilio           | W   | 0.146      | 0.384        | -                | 0.250 (0.014)    | 0 (0.000) |     0.96 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|           10 |     3314 | 2024-08-27 | fnatic            | L   | 0.133      | -            | -                | -                | -         |    -1.55 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            9 |     3376 | 2024-08-26 | Eternal Fire      | L   | 0.127      | -            | -                | -                | -         |    -0.07 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            8 |     3392 | 2024-08-26 | Falcons           | W   | 0.126      | 0.143        | 0.923 (0.017)    | -                | -         |     3.89 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            7 |     3485 | 2024-08-23 | paiN              | L   | 0.106      | -            | -                | -                | -         |    -0.22 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            6 |     3517 | 2024-08-22 | 9 Pandas          | W   | 0.099      | 0.143        | 0.167 (0.002)    | 0.865 (0.012)    | -         |     1.91 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            5 |     3573 | 2024-08-21 | Passion UA        | W   | 0.092      | -            | -                | -                | -         |     1.96 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            4 |     3604 | 2024-08-21 | Johnny Speeds     | W   | 0.091      | -            | -                | -                | -         |     1.53 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            3 |     3639 | 2024-08-19 | 500               | W   | 0.080      | -            | -                | -                | -         |     1.06 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            2 |     3645 | 2024-08-19 | Ninjas in Pyjamas | W   | 0.080      | -            | -                | -                | -         |     1.37 | Ax1Le, Boombl4, HeavyGod, ICY, interz |
|            1 |     3650 | 2024-08-19 | UNPAID            | W   | 0.080      | -            | -                | -                | -         |     1.16 | Ax1Le, Boombl4, HeavyGod, ICY, interz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,569.48)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.785 | $10,000.00     | $7,847.71       |
| 2024-09-07 |      0.206 | $20,000.00     | $4,119.33       |
| 2024-08-25 |      0.120 | $5,000.00      | $602.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
