### Roster Details<br />
Team Name: Revenant<br />
Roster: lauNX, NBK-, Neityu, Nivera, reiko<br />
Global Rank: [129](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [94]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  784.1<br />
<br />
Final Rank Value (784.1) = Starting Rank Value (735.8) + Head To Head Adjustments (48.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.8
- 400 + ( ( 0.169 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 735.8


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
|           36 |     2411 | 2024-09-14 | SINNERS           | W   | 0.394      | 0.384        | 0.103 (0.016)    | 0.698 (0.106)    | 0 (0.000) |    10.77 | lauNX, NBK-, Neityu, Nivera, reiko  |
|           35 |     2542 | 2024-09-10 | Insilio           | L   | 0.368      | -            | -                | -                | -         |    -4.98 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           34 |     2564 | 2024-09-09 | EYEBALLERS        | L   | 0.361      | -            | -                | -                | -         |    -4.65 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           33 |     2622 | 2024-09-07 | DMS               | W   | 0.346      | 0.384        | -                | 0.466 (0.062)    | 0 (0.000) |     4.21 | 0SAMAS, lauNX, NBK-, Nivera, reiko  |
|           32 |     2639 | 2024-09-06 | JANO              | W   | 0.341      | 0.435        | 0.036 (0.005)    | -                | 0 (0.000) |     6.42 | ADRON, lauNX, NBK-, Nivera, reiko   |
|           31 |     2695 | 2024-09-05 | Gaimin Gladiators | L   | 0.332      | -            | -                | -                | -         |    -2.63 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           30 |     2762 | 2024-09-03 | CYBERSHOKE        | L   | 0.319      | -            | -                | -                | -         |    -3.84 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           29 |     2775 | 2024-09-02 | FAVBET            | W   | 0.314      | 0.435        | 0.072 (0.010)    | 0.894 (0.122)    | 0 (0.000) |     6.90 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           28 |     2784 | 2024-09-02 | SINNERS           | L   | 0.312      | -            | -                | -                | -         |    -1.15 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           27 |     2815 | 2024-08-31 | ARCRED            | L   | 0.300      | -            | -                | -                | -         |    -4.50 | NBK-, Nivera, prosus, reiko, tiziaN |
|           26 |     2829 | 2024-08-30 | Sampi             | W   | 0.294      | 0.435        | 0.042 (0.005)    | 0.293 (0.037)    | 0 (0.000) |     7.26 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           25 |     2879 | 2024-08-29 | los kogutos       | L   | 0.286      | -            | -                | -                | -         |    -0.96 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           24 |     2885 | 2024-08-29 | B8                | L   | 0.286      | -            | -                | -                | -         |    -1.04 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           23 |     2983 | 2024-08-27 | Endpoint          | W   | 0.273      | 0.435        | 0.035 (0.004)    | 0.524 (0.062)    | 0 (0.000) |     5.56 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           22 |     3105 | 2024-08-25 | B8                | L   | 0.260      | -            | -                | -                | -         |    -0.90 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           21 |     3126 | 2024-08-24 | ECSTATIC          | W   | 0.253      | 0.143        | 0.078 (0.003)    | 1.000 (0.036)    | 0 (0.000) |     6.13 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           20 |     3150 | 2024-08-23 | Verdant           | W   | 0.247      | -            | -                | -                | 0 (0.000) |     5.91 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           19 |     3180 | 2024-08-22 | Alliance          | L   | 0.240      | -            | -                | -                | -         |    -1.99 | adeX, lauNX, NBK-, Nivera, reiko    |
|           18 |     3251 | 2024-08-21 | DMS               | W   | 0.233      | 0.435        | -                | 0.466 (0.047)    | 0 (0.000) |     3.19 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           17 |     3266 | 2024-08-21 | ENCE Academy      | W   | 0.232      | -            | -                | -                | 0 (0.000) |     4.11 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           16 |     3285 | 2024-08-20 | Monte Gen         | L   | 0.228      | -            | -                | -                | -         |    -2.89 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           15 |     3295 | 2024-08-20 | ex-Enterprise     | L   | 0.225      | -            | -                | -                | -         |    -2.36 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           14 |     3340 | 2024-08-18 | CYBERSHOKE        | L   | 0.214      | -            | -                | -                | -         |    -2.48 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           13 |     3386 | 2024-08-16 | Nexus             | W   | 0.201      | -            | -                | -                | -         |     0.77 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           12 |     3394 | 2024-08-16 | Sampi             | W   | 0.198      | 0.371        | 0.042 (0.003)    | -                | -         |     4.95 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           11 |     3441 | 2024-08-14 | Aurora Young Blud | W   | 0.187      | 0.435        | 0.045 (0.004)    | 0.841 (0.068)    | -         |     4.53 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|           10 |     3488 | 2024-08-13 | UNiTY             | W   | 0.179      | 0.333        | 0.070 (0.004)    | -                | -         |     4.40 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            9 |     3539 | 2024-08-12 | kONO              | W   | 0.172      | 0.333        | -                | 0.721 (0.041)    | -         |     4.07 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            8 |     3557 | 2024-08-11 | UNiTY             | L   | 0.166      | -            | -                | -                | -         |    -1.13 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            7 |     3605 | 2024-08-09 | TSM               | W   | 0.153      | -            | -                | -                | -         |     3.34 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            6 |     3666 | 2024-08-07 | ECLOT             | W   | 0.140      | 0.333        | 0.284 (0.013)    | 1.000 (0.047)    | -         |     4.30 | lauNX, NBK-, Nivera, reiko, tiziaN  |
|            5 |     3770 | 2024-08-04 | Monte Gen         | L   | 0.121      | -            | -                | -                | -         |    -1.44 | HS, lauNX, NBK-, Nivera, reiko      |
|            4 |     4108 | 2024-07-26 | DMS               | L   | 0.058      | -            | -                | -                | -         |    -1.01 | adeX, Jeebs, NBK-, Nivera, reiko    |
|            3 |     4137 | 2024-07-25 | 3DMAX             | L   | 0.053      | -            | -                | -                | -         |    -0.03 | adeX, Jeebs, NBK-, Nivera, reiko    |
|            2 |     4168 | 2024-07-24 | AMKAL             | L   | 0.047      | -            | -                | -                | -         |    -0.49 | adeX, lauNX, NBK-, Nivera, reiko    |
|            1 |     4179 | 2024-07-24 | Eternal Fire      | L   | 0.045      | -            | -                | -                | -         |    -0.04 | adeX, lauNX, NBK-, Nivera, reiko    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,073.74)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
