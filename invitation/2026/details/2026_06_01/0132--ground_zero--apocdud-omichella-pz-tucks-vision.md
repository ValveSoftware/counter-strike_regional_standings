### Roster Details<br />
Team Name: Ground Zero<br />
Roster: apocdud, Omichella, pz, tucks, vision<br />
Global Rank: [132](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [15]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  935.6<br />
<br />
Final Rank Value (935.6) = Starting Rank Value (943.3) + Head To Head Adjustments (-7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.269[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.446[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.3
- 400 + ( ( 0.285 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 943.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      227 | 2026-05-25 | Kaleido           | L   | 1.000      | -            | -                | -                | -         |   -12.67 | apocdud, Omichella, pz, tucks, vision   |
|           48 |      646 | 2026-05-12 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |    -8.91 | apocdud, Omichella, pz, tucks, vision   |
|           47 |      676 | 2026-05-12 | Rare Atom         | W   | 1.000      | 0.548        | 0.010 (0.006)    | 0.340 (0.186)    | 1 (1.000) |    19.90 | apocdud, Omichella, pz, tucks, vision   |
|           46 |      721 | 2026-05-11 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -2.33 | apocdud, Omichella, pz, tucks, vision   |
|           45 |      911 | 2026-05-03 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -5.90 | apocdud, Omichella, pz, tucks, vision   |
|           44 |      948 | 2026-05-02 | Abyssal           | W   | 0.999      | 0.278        | 0.004 (0.001)    | 0.275 (0.076)    | 0 (0.000) |     8.96 | apocdud, Omichella, pz, tucks, vision   |
|           43 |     1007 | 2026-05-01 | THUNDER dOWNUNDER | L   | 0.992      | -            | -                | -                | -         |    -5.93 | apocdud, Omichella, pz, tucks, vision   |
|           42 |     1097 | 2026-04-29 | MARKandLARRY      | W   | 0.978      | -            | -                | -                | 0 (0.000) |     3.25 | apocdud, Omichella, pz, tucks, vision   |
|           41 |     1179 | 2026-04-27 | Skele             | W   | 0.965      | -            | -                | -                | 0 (0.000) |     3.17 | apocdud, Omichella, pz, tucks, vision   |
|           40 |     1689 | 2026-04-09 | Rooster           | W   | 0.845      | 0.278        | 0.006 (0.001)    | 0.348 (0.082)    | 0 (0.000) |     9.73 | apocdud, Omichella, pz, sliimey, vision |
|           39 |     1745 | 2026-04-07 | Abyssal           | W   | 0.832      | -            | -                | -                | -         |     6.57 | apocdud, Omichella, pz, sliimey, vision |
|           38 |     1836 | 2026-04-05 | Rooster           | W   | 0.819      | 0.278        | 0.006 (0.001)    | 0.348 (0.079)    | -         |     9.47 | apocdud, Omichella, pz, sliimey, vision |
|           37 |     2096 | 2026-04-02 | Ding Cuts         | W   | 0.799      | -            | -                | -                | -         |     3.45 | apocdud, Omichella, pz, sliimey, vision |
|           36 |     2115 | 2026-04-01 | DEPO              | L   | 0.797      | -            | -                | -                | -         |    -8.64 | apocdud, Omichella, pz, sliimey, vision |
|           35 |     2192 | 2026-04-01 | Abyssal           | W   | 0.792      | 0.624        | 0.004 (0.002)    | 0.275 (0.136)    | -         |     5.94 | apocdud, Omichella, pz, sliimey, vision |
|           34 |     2301 | 2026-03-31 | 11mins            | W   | 0.785      | -            | -                | -                | -         |     2.62 | apocdud, Omichella, pz, sliimey, vision |
|           33 |     2305 | 2026-03-31 | Abyssal           | W   | 0.784      | 0.624        | 0.004 (0.002)    | 0.275 (0.134)    | -         |     5.68 | apocdud, Omichella, pz, sliimey, vision |
|           32 |     2608 | 2026-03-26 | Rooster           | L   | 0.752      | -            | -                | -                | -         |   -14.99 | apocdud, damyo, Omichella, pz, vision   |
|           31 |     2665 | 2026-03-25 | SemperFi          | L   | 0.745      | -            | -                | -                | -         |    -6.96 | apocdud, damyo, Omichella, pz, vision   |
|           30 |     2792 | 2026-03-23 | Mindfreak         | W   | 0.732      | -            | -                | -                | -         |     8.73 | apocdud, damyo, Omichella, pz, vision   |
|           29 |     2903 | 2026-03-21 | Skele             | W   | 0.719      | -            | -                | -                | -         |     2.82 | apocdud, damyo, HUGH, Omichella, pz     |
|           28 |     3104 | 2026-03-16 | Arcade            | L   | 0.690      | -            | -                | -                | -         |   -15.32 | apocdud, damyo, Omichella, pz, vision   |
|           27 |     3108 | 2026-03-16 | SemperFi          | L   | 0.689      | -            | -                | -                | -         |    -6.71 | apocdud, damyo, Omichella, pz, vision   |
|           26 |     3139 | 2026-03-16 | Rooster           | W   | 0.685      | 0.328        | 0.006 (0.001)    | 0.348 (0.078)    | 1 (0.685) |     6.58 | apocdud, damyo, Omichella, pz, vision   |
|           25 |     3142 | 2026-03-16 | THUNDER dOWNUNDER | L   | 0.684      | -            | -                | -                | -         |    -4.41 | apocdud, damyo, Omichella, pz, vision   |
|           24 |     3145 | 2026-03-15 | Rooster           | W   | 0.683      | 0.328        | 0.006 (0.001)    | 0.348 (0.078)    | 1 (0.683) |     6.73 | apocdud, damyo, Omichella, pz, vision   |
|           23 |     3187 | 2026-03-14 | THUNDER dOWNUNDER | L   | 0.677      | -            | -                | -                | -         |    -4.57 | apocdud, damyo, Omichella, pz, vision   |
|           22 |     3227 | 2026-03-13 | Mindfreak         | W   | 0.670      | -            | -                | -                | 1 (0.670) |     8.29 | apocdud, damyo, Omichella, pz, vision   |
|           21 |     3230 | 2026-03-13 | SemperFi          | L   | 0.669      | -            | -                | -                | -         |    -6.89 | apocdud, damyo, Omichella, pz, vision   |
|           20 |     3331 | 2026-03-12 | Rooster           | W   | 0.658      | 0.351        | 0.006 (0.001)    | 0.348 (0.080)    | 1 (0.658) |     6.75 | apocdud, damyo, Omichella, pz, vision   |
|           19 |     3334 | 2026-03-12 | THUNDER dOWNUNDER | L   | 0.658      | -            | -                | -                | -         |    -4.25 | apocdud, damyo, Omichella, pz, vision   |
|           18 |     3339 | 2026-03-11 | Rooster           | W   | 0.657      | 0.351        | 0.006 (0.001)    | 0.348 (0.080)    | 1 (0.657) |     6.92 | apocdud, damyo, Omichella, pz, vision   |
|           17 |     3417 | 2026-03-09 | Lynn Vision       | L   | 0.643      | -            | -                | -                | -         |    -1.62 | apocdud, damyo, Omichella, pz, vision   |
|           16 |     3485 | 2026-03-08 | Rare Atom         | L   | 0.637      | -            | -                | -                | -         |    -5.09 | apocdud, damyo, Omichella, pz, vision   |
|           15 |     3960 | 2026-02-27 | Mindfreak         | L   | 0.572      | -            | -                | -                | -         |   -11.86 | apocdud, damyo, Omichella, pz, vision   |
|           14 |     3971 | 2026-02-26 | THUNDER dOWNUNDER | L   | 0.571      | -            | -                | -                | -         |    -3.33 | apocdud, damyo, Omichella, pz, vision   |
|           13 |     4045 | 2026-02-25 | Abyssal           | L   | 0.564      | -            | -                | -                | -         |   -14.19 | apocdud, damyo, Omichella, pz, vision   |
|           12 |     4048 | 2026-02-25 | THUNDER dOWNUNDER | L   | 0.563      | -            | -                | -                | -         |    -3.65 | apocdud, damyo, Omichella, pz, vision   |
|           11 |     4069 | 2026-02-25 | Mindfreak         | W   | 0.559      | -            | -                | -                | -         |     5.26 | apocdud, damyo, Omichella, pz, vision   |
|           10 |     4121 | 2026-02-24 | THUNDER dOWNUNDER | L   | 0.552      | -            | -                | -                | -         |    -3.63 | apocdud, damyo, Omichella, pz, vision   |
|            9 |     4162 | 2026-02-23 | Mindfreak         | W   | 0.546      | -            | -                | -                | -         |     5.27 | apocdud, damyo, Omichella, pz, vision   |
|            8 |     4171 | 2026-02-23 | Arcade            | W   | 0.545      | -            | -                | -                | -         |     4.55 | apocdud, damyo, Omichella, pz, vision   |
|            7 |     4244 | 2026-02-22 | THUNDER dOWNUNDER | L   | 0.539      | -            | -                | -                | -         |    -3.50 | apocdud, damyo, Omichella, pz, vision   |
|            6 |     4339 | 2026-02-20 | Mindfreak         | W   | 0.526      | -            | -                | -                | -         |     5.03 | apocdud, damyo, Omichella, pz, vision   |
|            5 |     4442 | 2026-02-18 | Arcade            | W   | 0.512      | -            | -                | -                | -         |     4.54 | apocdud, damyo, Omichella, pz, vision   |
|            4 |     6002 | 2025-12-12 | Rooster           | L   | 0.063      | -            | -                | -                | -         |    -1.25 | apocdud, damyo, Omichella, pz, vision   |
|            3 |     6007 | 2025-12-12 | Mindfreak         | L   | 0.062      | -            | -                | -                | -         |    -1.69 | apocdud, damyo, Omichella, pz, vision   |
|            2 |     6098 | 2025-12-06 | FURY              | W   | 0.024      | -            | -                | -                | -         |     0.06 | apocdud, damyo, Omichella, pz, vision   |
|            1 |     6101 | 2025-12-06 | Rooster           | W   | 0.023      | -            | -                | -                | -         |     0.27 | apocdud, damyo, Omichella, pz, vision   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,278.82)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-04-09 |      0.845 | $1,500.00      | $1,267.58       |
| 2026-03-17 |      0.691 | $708.00        | $489.33         |
| 2026-03-15 |      0.678 | $2,118.00      | $1,435.71       |
| 2026-02-28 |      0.578 | $884.00        | $510.71         |
| 2026-02-24 |      0.552 | $1,000.00      | $552.26         |
| 2025-12-13 |      0.070 | $330.00        | $23.23          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
