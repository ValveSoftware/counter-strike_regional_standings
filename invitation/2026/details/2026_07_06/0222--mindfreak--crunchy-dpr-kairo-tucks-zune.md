### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Crunchy, dpr, kairo, tucks, zune<br />
Global Rank: [222](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  700.9<br />
<br />
Final Rank Value (700.9) = Starting Rank Value (725.2) + Head To Head Adjustments (-24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.137[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 725.2
- 400 + ( ( 0.173 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 725.2


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
|           35 |     2442 | 2026-04-06 | Arcade            | L   | 0.592      | -            | -                | -                | -         |    -9.70 | BRACE, Crunchy, dpr, kairo, zune   |
|           34 |     2496 | 2026-04-05 | Abyssal           | L   | 0.586      | -            | -                | -                | -         |   -10.36 | BRACE, Crunchy, dpr, kairo, zune   |
|           33 |     2665 | 2026-04-03 | Time Waves        | W   | 0.572      | -            | -                | -                | 0 (0.000) |     2.76 | Crunchy, dpr, JiNxZiE, kairo, zune |
|           32 |     2965 | 2026-03-31 | Abyssal           | L   | 0.551      | -            | -                | -                | -         |   -10.37 | BRACE, Crunchy, dpr, kairo, zune   |
|           31 |     2968 | 2026-03-30 | 11mins            | L   | 0.550      | -            | -                | -                | -         |   -13.71 | BRACE, Crunchy, dpr, kairo, zune   |
|           30 |     3321 | 2026-03-25 | Rooster           | L   | 0.513      | -            | -                | -                | -         |    -7.61 | Crunchy, dpr, sliimey, tucks, zune |
|           29 |     3378 | 2026-03-24 | MARKandLARRY      | W   | 0.506      | 0.278        | 0.001 (0.000)    | 0.155 (0.022)    | 0 (0.000) |     5.50 | Crunchy, dpr, sliimey, tucks, zune |
|           28 |     3453 | 2026-03-23 | Ground Zero       | L   | 0.499      | -            | -                | -                | -         |    -7.05 | Crunchy, dpr, sliimey, tucks, zune |
|           27 |     3562 | 2026-03-21 | MARKandLARRY      | W   | 0.486      | 0.278        | -                | 0.155 (0.021)    | 0 (0.000) |     5.15 | Crunchy, dpr, sliimey, tucks, zune |
|           26 |     3799 | 2026-03-16 | Arcade            | L   | 0.453      | -            | -                | -                | -         |    -8.23 | Crunchy, dpr, sliimey, tucks, zune |
|           25 |     3810 | 2026-03-15 | SemperFi          | L   | 0.450      | -            | -                | -                | -         |    -3.41 | Crunchy, dpr, sliimey, tucks, zune |
|           24 |     3812 | 2026-03-15 | Abyssal           | W   | 0.449      | 0.328        | 0.004 (0.001)    | 0.246 (0.036)    | 1 (0.449) |     5.44 | Crunchy, dpr, sliimey, tucks, zune |
|           23 |     3888 | 2026-03-13 | Ground Zero       | L   | 0.437      | -            | -                | -                | -         |    -6.45 | Crunchy, dpr, sliimey, Texta, zune |
|           22 |     3890 | 2026-03-13 | THUNDER dOWNUNDER | L   | 0.436      | -            | -                | -                | -         |    -1.70 | Crunchy, dpr, sliimey, Texta, zune |
|           21 |     3941 | 2026-03-13 | Arcade            | W   | 0.431      | 0.351        | 0.001 (0.000)    | 0.162 (0.024)    | 1 (0.431) |     5.64 | Crunchy, dpr, sliimey, Texta, zune |
|           20 |     3942 | 2026-03-12 | SemperFi          | L   | 0.431      | -            | -                | -                | -         |    -3.48 | Crunchy, dpr, sliimey, Texta, zune |
|           19 |     3944 | 2026-03-12 | Arcade            | W   | 0.430      | 0.351        | 0.001 (0.000)    | 0.162 (0.024)    | 1 (0.430) |     5.74 | Crunchy, dpr, sliimey, Texta, zune |
|           18 |     4581 | 2026-02-28 | THUNDER dOWNUNDER | W   | 0.345      | 0.317        | 0.030 (0.003)    | 0.351 (0.038)    | 0 (0.000) |     9.71 | Crunchy, dpr, sliimey, Texta, zune |
|           17 |     4621 | 2026-02-27 | Ground Zero       | W   | 0.339      | 0.317        | 0.003 (0.000)    | -                | 0 (0.000) |     5.96 | Crunchy, dpr, sliimey, Texta, zune |
|           16 |     4627 | 2026-02-27 | Abyssal           | W   | 0.339      | 0.317        | 0.004 (0.000)    | 0.246 (0.026)    | 0 (0.000) |     4.46 | Crunchy, dpr, sliimey, Texta, zune |
|           15 |     4702 | 2026-02-25 | Skele             | W   | 0.331      | -            | -                | -                | 0 (0.000) |     2.65 | Crunchy, dpr, sliimey, Texta, zune |
|           14 |     4704 | 2026-02-25 | THUNDER dOWNUNDER | L   | 0.331      | -            | -                | -                | -         |    -1.00 | Crunchy, dpr, sliimey, Texta, zune |
|           13 |     4708 | 2026-02-25 | Abyssal           | W   | 0.330      | 0.624        | 0.004 (0.001)    | 0.246 (0.051)    | -         |     4.43 | Crunchy, dpr, sliimey, Texta, zune |
|           12 |     4730 | 2026-02-25 | Ground Zero       | L   | 0.326      | -            | -                | -                | -         |    -4.33 | Crunchy, dpr, sliimey, Texta, zune |
|           11 |     4823 | 2026-02-23 | Ground Zero       | L   | 0.313      | -            | -                | -                | -         |    -4.25 | Crunchy, dpr, sliimey, Texta, zune |
|           10 |     4904 | 2026-02-22 | Skele             | W   | 0.306      | -            | -                | -                | -         |     2.36 | Crunchy, dpr, sliimey, Texta, zune |
|            9 |     4909 | 2026-02-22 | BBBMBCBS          | W   | 0.305      | -            | -                | -                | -         |     1.98 | Crunchy, dpr, sliimey, Texta, zune |
|            8 |     4948 | 2026-02-21 | Arcade            | W   | 0.299      | 0.278        | 0.001 (0.000)    | 0.162 (0.013)    | -         |     4.50 | Crunchy, dpr, sliimey, Texta, zune |
|            7 |     5000 | 2026-02-20 | Ground Zero       | L   | 0.293      | -            | -                | -                | -         |    -4.00 | Crunchy, dpr, sliimey, Texta, zune |
|            6 |     5106 | 2026-02-18 | Time Waves        | W   | 0.279      | -            | -                | -                | -         |     1.27 | Crunchy, dpr, sliimey, Texta, zune |
|            5 |     5558 | 2026-02-07 | Rooster           | L   | 0.211      | -            | -                | -                | -         |    -2.63 | Crunchy, dpr, sliimey, Texta, zune |
|            4 |     5583 | 2026-02-06 | THUNDER dOWNUNDER | L   | 0.204      | -            | -                | -                | -         |    -0.65 | Crunchy, dpr, sliimey, Texta, zune |
|            3 |     5588 | 2026-02-06 | Rooster           | W   | 0.203      | 0.305        | 0.009 (0.001)    | 0.394 (0.024)    | -         |     3.90 | Crunchy, dpr, sliimey, Texta, zune |
|            2 |     5765 | 2026-01-31 | Arcade            | W   | 0.164      | -            | -                | -                | -         |     2.51 | Crunchy, dpr, sliimey, Texta, zune |
|            1 |     5767 | 2026-01-31 | Ding Cuts         | W   | 0.163      | -            | -                | -                | -         |     0.71 | Crunchy, dpr, sliimey, Texta, zune |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,804.07)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.445 | $706.00        | $314.01         |
| 2026-02-28 |      0.345 | $3,891.00      | $1,341.03       |
| 2026-02-08 |      0.212 | $704.00        | $149.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
