### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [16](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [12]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1495.8<br />
<br />
Final Rank Value (1495.8) = Starting Rank Value (1512.5) + Head To Head Adjustments (-16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.622[<sup>1</sup>](#table2)
- Bounty Collected: 0.545[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.912[<sup>2</sup>](#table1)

The average of these factors is 0.560<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1512.5
- 400 + ( ( 0.560 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1512.5


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
|           26 |      270 | 2024-08-13 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -7.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      318 | 2024-08-12 | Virtus.pro       | W   | 1.000      | 1.000        | 0.514 (0.514)    | 0.243 (0.243)    | 1 (1.000) |    19.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      344 | 2024-08-11 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -3.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      385 | 2024-08-09 | BIG              | W   | 1.000      | 0.143        | 0.150 (0.021)    | 0.275 (0.039)    | 1 (1.000) |     7.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |      407 | 2024-08-08 | ALTERNATE aTTaX  | W   | 1.000      | 0.143        | -                | 0.565 (0.081)    | 1 (1.000) |     0.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |      451 | 2024-08-07 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -10.95 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |      639 | 2024-08-02 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -8.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |      761 | 2024-07-30 | GamerLegion      | W   | 1.000      | 0.581        | 0.172 (0.100)    | 0.389 (0.226)    | 1 (1.000) |     3.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |      792 | 2024-07-29 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -8.84 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1560 | 2024-06-16 | Complexity       | L   | 0.759      | -            | -                | -                | -         |    -9.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1565 | 2024-06-16 | ENCE             | W   | 0.758      | 0.500        | 0.157 (0.059)    | 0.348 (0.132)    | 1 (0.758) |     6.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1594 | 2024-06-15 | The MongolZ      | W   | 0.752      | 0.500        | 0.995 (0.374)    | 0.655 (0.246)    | 1 (0.752) |    20.62 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     1604 | 2024-06-15 | Party Astronauts | W   | 0.750      | 0.500        | 0.039 (0.015)    | 0.523 (0.196)    | 1 (0.750) |     1.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     1647 | 2024-06-14 | Aurora           | L   | 0.744      | -            | -                | -                | -         |   -14.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2253 | 2024-05-28 | Liquid           | L   | 0.635      | -            | -                | -                | -         |    -5.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2274 | 2024-05-27 | Monte            | W   | 0.628      | 0.624        | 0.097 (0.038)    | 0.364 (0.143)    | 1 (0.628) |     1.53 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     2286 | 2024-05-27 | G2               | L   | 0.626      | -            | -                | -                | -         |    -1.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     2537 | 2024-05-18 | Spirit           | L   | 0.565      | -            | -                | -                | -         |    -2.83 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     2567 | 2024-05-17 | Virtus.pro       | W   | 0.558      | 0.769        | 0.514 (0.221)    | 0.243 (0.104)    | 1 (0.558) |    11.41 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     2641 | 2024-05-15 | BetBoom          | W   | 0.546      | 0.769        | 0.279 (0.117)    | 0.507 (0.213)    | 1 (0.546) |     4.44 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     2707 | 2024-05-14 | Virtus.pro       | L   | 0.539      | -            | -                | -                | -         |    -5.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3080 | 2024-04-27 | G2               | L   | 0.425      | -            | -                | -                | -         |    -1.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3105 | 2024-04-26 | BetBoom          | L   | 0.418      | -            | -                | -                | -         |    -9.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3131 | 2024-04-25 | TYLOO            | W   | 0.412      | 0.889        | 0.016 (0.006)    | -                | -         |     0.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3151 | 2024-04-24 | The MongolZ      | L   | 0.405      | -            | -                | -                | -         |    -1.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4326 | 2024-03-06 | Metizport        | L   | 0.080      | -            | -                | -                | -         |    -2.49 | Maden, Magisk, s1mple, Snappi, SunPayus  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($75,815.50)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-06-16 |      0.759 | $20,000.00     | $15,171.39      |
| 2024-06-02 |      0.667 | $5,000.00      | $3,334.49       |
| 2024-05-19 |      0.572 | $50,000.00     | $28,594.93      |
| 2024-05-12 |      0.526 | $7,000.00      | $3,680.25       |
| 2024-03-10 |      0.107 | $5,000.00      | $534.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
