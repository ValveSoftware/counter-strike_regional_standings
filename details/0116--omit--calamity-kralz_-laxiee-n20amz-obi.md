### Roster Details<br />
Team Name: OMiT<br />
Roster: calamity, kralz , Laxiee, N20AmZ, obi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [9]( ../standings_asia.md)<br />
Final Rank Value:  824.1<br />
<br />
Final Rank Value (824.1) = Starting Rank Value (822.2) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.2
- 400 + ( ( 0.200 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 822.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      143 | 2024-06-16 | E-Xolos LAZER    | L   | 1.000      | -            | -                | -                | -         |   -16.97 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           22 |      170 | 2024-06-15 | One More         | L   | 1.000      | -            | -                | -                | -         |   -21.66 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           21 |      176 | 2024-06-15 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -6.40 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           20 |      206 | 2024-06-14 | Strife           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.156 (0.022)    | 0 (0.000) |     8.77 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           19 |      212 | 2024-06-14 | Take Flyte       | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.283 (0.105)    | 0 (0.000) |    13.00 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           18 |      323 | 2024-06-10 | Legacy           | L   | 0.996      | -            | -                | -                | -         |    -6.19 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           17 |      357 | 2024-06-09 | E-Xolos LAZER    | W   | 0.989      | 0.368        | 0.016 (0.006)    | 0.282 (0.103)    | 0 (0.000) |    11.86 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           16 |      418 | 2024-06-08 | Snakes Den       | W   | 0.983      | 0.371        | 0.000 (0.000)    | 0.119 (0.043)    | 0 (0.000) |     5.41 | calamity, kralz , Laxiee, obi, tmk        |
|           15 |      529 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.969      | 0.371        | 0.016 (0.006)    | 0.297 (0.107)    | 0 (0.000) |    12.31 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           14 |      540 | 2024-06-06 | Legacy           | L   | 0.968      | -            | -                | -                | -         |    -5.81 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           13 |      656 | 2024-06-04 | Final Form       | W   | 0.955      | 0.371        | 0.005 (0.002)    | 0.081 (0.029)    | 0 (0.000) |     8.91 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           12 |      692 | 2024-06-03 | Villainous       | W   | 0.949      | 0.368        | 0.005 (0.002)    | -                | 0 (0.000) |     5.50 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           11 |     1046 | 2024-05-20 | Party Astronauts | L   | 0.856      | -            | -                | -                | -         |    -7.26 | calamity, kralz , Laxiee, N20AmZ, obi     |
|           10 |     1946 | 2024-04-17 | Liquid           | L   | 0.635      | -            | -                | -                | -         |    -0.24 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            9 |     1950 | 2024-04-17 | NRG              | W   | 0.635      | 0.143        | 0.026 (0.002)    | 0.478 (0.043)    | 0 (0.000) |    12.93 | calamity, kralz , Laxiee, N20AmZ, obi     |
|            8 |     2637 | 2024-03-17 | LAG              | L   | 0.430      | -            | -                | -                | -         |    -5.27 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            7 |     2638 | 2024-03-17 | Xiaoma           | W   | 0.429      | 0.333        | 0.002 (0.000)    | 0.017 (0.002)    | 1 (0.429) |     2.74 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            6 |     2645 | 2024-03-17 | Snakes Den       | W   | 0.428      | 0.333        | -                | 0.119 (0.017)    | 1 (0.428) |     2.36 | arviast, C4LLM3SU3, calamity, N20AmZ, obi |
|            5 |     3171 | 2024-02-24 | Wildcard         | L   | 0.282      | -            | -                | -                | -         |    -2.70 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            4 |     3282 | 2024-02-19 | Mythic           | L   | 0.250      | -            | -                | -                | -         |    -3.34 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            3 |     3284 | 2024-02-19 | Party Astronauts | L   | 0.248      | -            | -                | -                | -         |    -2.17 | C4LLM3SU3, calamity, Laxiee, N20AmZ, obi  |
|            2 |     3351 | 2024-02-16 | Rocket           | L   | 0.229      | -            | -                | -                | -         |    -6.08 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |
|            1 |     3381 | 2024-02-15 | Limitless        | W   | 0.222      | 0.143        | 0.002 (0.000)    | 0.225 (0.007)    | -         |     2.26 | C4LLM3SU3, calamity, N20AmZ, obi, tmk     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,106.70)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $750.00        | $750.00         |
| 2024-06-10 |      0.996 | $4,300.00      | $4,281.87       |
| 2024-03-17 |      0.430 | $2,500.00      | $1,074.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
