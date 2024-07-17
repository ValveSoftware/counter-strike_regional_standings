### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [16](../standings_global.md)<br />
Regional Rank: [12]( ../standings_europe.md)<br />
Final Rank Value:  1552.4<br />
<br />
Final Rank Value (1552.4) = Starting Rank Value (1561.3) + Head To Head Adjustments (-9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.684[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.192[<sup>2</sup>](#table1)
- LAN Wins: 0.752[<sup>2</sup>](#table1)

The average of these factors is 0.541<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1561.3
- 400 + ( ( 0.541 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1561.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      322 | 2024-06-16 | Complexity       | L   | 0.993      | -            | -                | -                | -         |    -8.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           29 |      327 | 2024-06-16 | ENCE             | W   | 0.992      | 0.500        | 0.212 (0.105)    | 0.377 (0.187)    | 1 (0.992) |     8.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |      356 | 2024-06-15 | The MongolZ      | W   | 0.987      | 0.500        | 1.000 (0.493)    | 0.653 (0.322)    | 1 (0.987) |    27.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      366 | 2024-06-15 | Party Astronauts | W   | 0.985      | 0.500        | 0.063 (0.031)    | 0.604 (0.297)    | 1 (0.985) |     1.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      409 | 2024-06-14 | Aurora           | L   | 0.978      | -            | -                | -                | -         |   -21.79 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     1015 | 2024-05-28 | Liquid           | L   | 0.869      | -            | -                | -                | -         |   -11.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     1036 | 2024-05-27 | Monte            | W   | 0.862      | 0.624        | 0.099 (0.053)    | 0.413 (0.222)    | 1 (0.862) |     1.44 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     1048 | 2024-05-27 | G2               | L   | 0.860      | -            | -                | -                | -         |    -3.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1299 | 2024-05-18 | Spirit           | L   | 0.799      | -            | -                | -                | -         |    -1.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1329 | 2024-05-17 | Virtus.pro       | W   | 0.793      | 0.769        | 0.349 (0.213)    | 0.367 (0.223)    | 1 (0.793) |    18.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1403 | 2024-05-15 | BetBoom          | W   | 0.781      | 0.769        | 0.403 (0.242)    | 0.704 (0.423)    | 1 (0.781) |    10.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1469 | 2024-05-14 | Virtus.pro       | L   | 0.774      | -            | -                | -                | -         |    -6.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1842 | 2024-04-27 | G2               | L   | 0.659      | -            | -                | -                | -         |    -2.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1867 | 2024-04-26 | BetBoom          | L   | 0.652      | -            | -                | -                | -         |   -10.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1893 | 2024-04-25 | TYLOO            | W   | 0.646      | 0.889        | 0.032 (0.018)    | 0.141 (0.081)    | 1 (0.646) |     0.36 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1913 | 2024-04-24 | The MongolZ      | L   | 0.639      | -            | -                | -                | -         |    -2.33 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3088 | 2024-03-06 | Metizport        | L   | 0.315      | -            | -                | -                | -         |    -9.55 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           13 |     3539 | 2024-02-16 | AMKAL            | L   | 0.186      | -            | -                | -                | -         |    -5.41 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           12 |     3569 | 2024-02-15 | Eternal Fire     | L   | 0.179      | -            | -                | -                | -         |    -1.70 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           11 |     3595 | 2024-02-14 | FaZe             | L   | 0.174      | -            | -                | -                | -         |    -0.70 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|           10 |     3599 | 2024-02-14 | 3DMAX            | W   | 0.173      | -            | -                | -                | 1 (0.173) |     0.75 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     3655 | 2024-02-10 | Spirit           | L   | 0.148      | -            | -                | -                | -         |    -0.39 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     3668 | 2024-02-09 | ENCE             | W   | 0.141      | 1.000        | 0.212 (0.030)    | 0.377 (0.053)    | 1 (0.141) |     1.59 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     3703 | 2024-02-06 | Natus Vincere    | W   | 0.120      | 1.000        | 1.000 (0.120)    | -                | 1 (0.120) |     3.26 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     3712 | 2024-02-05 | Complexity       | W   | 0.115      | 1.000        | 0.445 (0.051)    | 0.412 (0.047)    | -         |     2.93 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     3726 | 2024-02-04 | Rebels           | W   | 0.108      | 1.000        | -                | 0.575 (0.062)    | -         |     0.19 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     3768 | 2024-02-03 | Eternal Fire     | L   | 0.099      | -            | -                | -                | -         |    -0.92 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     3918 | 2024-01-26 | Vitality         | L   | 0.046      | -            | -                | -                | -         |    -0.12 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     3964 | 2024-01-23 | OG               | W   | 0.028      | -            | -                | -                | -         |     0.07 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     3992 | 2024-01-22 | Astralis         | L   | 0.021      | -            | -                | -                | -         |    -0.08 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($84,547.41)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.993 | $20,000.00     | $19,861.29      |
| 2024-06-02 |      0.901 | $5,000.00      | $4,506.96       |
| 2024-05-19 |      0.806 | $50,000.00     | $40,319.69      |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-02-11 |      0.154 | $80,000.00     | $12,314.83      |
| 2024-01-28 |      0.061 | $8,500.00      | $516.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
