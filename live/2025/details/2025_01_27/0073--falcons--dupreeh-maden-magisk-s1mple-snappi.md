### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [73](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [50]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  951.7<br />
<br />
Final Rank Value (951.7) = Starting Rank Value (915.6) + Head To Head Adjustments (36.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.463[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 915.6
- 400 + ( ( 0.264 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 915.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      923 | 2024-11-19 | GamerLegion     | L   | 0.738      | -            | -                | -                | -         |    -2.52 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      939 | 2024-11-17 | SAW             | L   | 0.730      | -            | -                | -                | -         |    -3.28 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |      950 | 2024-11-17 | FaZe            | L   | 0.725      | -            | -                | -                | -         |    -0.17 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |      963 | 2024-11-16 | ECLOT           | W   | 0.724      | 0.143        | 0.287 (0.030)    | 0.994 (0.103)    | 1 (0.724) |    18.01 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1466 | 2024-10-26 | Eternal Fire    | L   | 0.578      | -            | -                | -                | -         |    -0.49 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1487 | 2024-10-25 | SAW             | L   | 0.572      | -            | -                | -                | -         |    -2.45 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     1523 | 2024-10-21 | Virtus.pro      | L   | 0.547      | -            | -                | -                | -         |    -2.20 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           27 |     1530 | 2024-10-21 | 3DMAX           | L   | 0.545      | -            | -                | -                | -         |    -1.86 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           26 |     2246 | 2024-09-26 | FaZe            | L   | 0.379      | -            | -                | -                | -         |    -0.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2297 | 2024-09-25 | Natus Vincere   | L   | 0.372      | -            | -                | -                | -         |    -0.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2638 | 2024-09-14 | RED Canids      | L   | 0.299      | -            | -                | -                | -         |    -3.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2670 | 2024-09-13 | Virtus.pro      | L   | 0.293      | -            | -                | -                | -         |    -1.31 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2708 | 2024-09-12 | ATOX            | W   | 0.285      | 0.889        | 0.133 (0.034)    | 0.536 (0.136)    | 1 (0.285) |     7.49 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2735 | 2024-09-11 | FURIA           | L   | 0.279      | -            | -                | -                | -         |    -0.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     3103 | 2024-08-29 | Virtus.pro      | L   | 0.192      | -            | -                | -                | -         |    -0.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     3138 | 2024-08-28 | Falcons         | L   | 0.186      | -            | -                | -                | -         |    -0.07 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     3158 | 2024-08-28 | Spirit          | L   | 0.185      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3189 | 2024-08-27 | Eternal Fire    | L   | 0.180      | -            | -                | -                | -         |    -0.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3214 | 2024-08-27 | paiN            | L   | 0.178      | -            | -                | -                | -         |    -0.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3250 | 2024-08-26 | 3DMAX           | W   | 0.174      | 0.143        | 0.404 (0.010)    | 0.553 (0.014)    | 0 (0.000) |     5.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3272 | 2024-08-26 | OG              | W   | 0.173      | 0.143        | 0.168 (0.004)    | 0.273 (0.007)    | 0 (0.000) |     2.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3294 | 2024-08-26 | 9z              | W   | 0.171      | -            | -                | -                | 1 (0.171) |     2.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3315 | 2024-08-25 | Virtus.pro      | W   | 0.167      | 0.535        | 0.159 (0.014)    | 0.386 (0.035)    | 0 (0.000) |     4.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3327 | 2024-08-25 | BetBoom         | W   | 0.165      | 0.143        | 0.227 (0.005)    | 0.524 (0.012)    | 1 (0.165) |     3.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3340 | 2024-08-24 | Complexity      | W   | 0.159      | 0.535        | 0.110 (0.009)    | 0.279 (0.024)    | -         |     4.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3346 | 2024-08-24 | 9z              | L   | 0.158      | -            | -                | -                | -         |    -2.30 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3388 | 2024-08-22 | M80             | W   | 0.147      | 0.535        | 0.133 (0.011)    | 0.412 (0.032)    | -         |     3.59 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3698 | 2024-08-13 | FaZe            | L   | 0.085      | -            | -                | -                | -         |    -0.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3746 | 2024-08-12 | Virtus.pro      | W   | 0.079      | 1.000        | 0.159 (0.013)    | 0.386 (0.031)    | 1 (0.079) |     2.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3772 | 2024-08-11 | MOUZ            | L   | 0.072      | -            | -                | -                | -         |    -0.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3813 | 2024-08-09 | BIG             | W   | 0.060      | 0.143        | 0.298 (0.003)    | -                | 1 (0.060) |     1.76 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3835 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.054      | 0.143        | -                | 0.666 (0.005)    | 1 (0.054) |     1.24 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3879 | 2024-08-07 | Eternal Fire    | L   | 0.047      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4067 | 2024-08-02 | Astralis        | L   | 0.012      | -            | -                | -                | -         |    -0.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,211.92)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.587 | $2,000.00      | $1,173.84       |
| 2024-09-29 |      0.400 | $10,000.00     | $4,000.40       |
| 2024-09-22 |      0.354 | $7,000.00      | $2,478.39       |
| 2024-09-01 |      0.212 | $5,000.00      | $1,061.03       |
| 2024-08-25 |      0.167 | $20,000.00     | $3,345.05       |
| 2024-08-18 |      0.121 | $16,000.00     | $1,930.38       |
| 2024-08-04 |      0.026 | $8,500.00      | $222.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
