### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [17](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [13]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1455.8<br />
<br />
Final Rank Value (1455.8) = Starting Rank Value (1447.0) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.594[<sup>1</sup>](#table2)
- Bounty Collected: 0.513[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.748[<sup>2</sup>](#table1)

The average of these factors is 0.507<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1447.0
- 400 + ( ( 0.507 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1447.0


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
|           29 |       53 | 2024-07-30 | GamerLegion      | W   | 1.000      | 0.581        | 0.177 (0.103)    | 0.273 (0.159)    | 1 (1.000) |     5.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           28 |       84 | 2024-07-29 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -6.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |      852 | 2024-06-16 | Complexity       | L   | 0.899      | -            | -                | -                | -         |    -8.65 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |      857 | 2024-06-16 | ENCE             | W   | 0.898      | 0.500        | 0.175 (0.078)    | 0.404 (0.181)    | 1 (0.898) |    11.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |      886 | 2024-06-15 | The MongolZ      | W   | 0.892      | 0.500        | 1.000 (0.446)    | 0.719 (0.321)    | 1 (0.892) |    25.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      896 | 2024-06-15 | Party Astronauts | W   | 0.890      | 0.500        | 0.042 (0.019)    | 0.532 (0.237)    | 1 (0.890) |     2.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      939 | 2024-06-14 | Aurora           | L   | 0.884      | -            | -                | -                | -         |   -14.92 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     1545 | 2024-05-28 | Liquid           | L   | 0.775      | -            | -                | -                | -         |   -10.28 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     1566 | 2024-05-27 | Monte            | W   | 0.767      | 0.624        | 0.081 (0.039)    | 0.613 (0.294)    | 1 (0.767) |     2.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     1578 | 2024-05-27 | G2               | L   | 0.766      | -            | -                | -                | -         |    -1.50 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     1829 | 2024-05-18 | Spirit           | L   | 0.705      | -            | -                | -                | -         |    -1.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     1859 | 2024-05-17 | Virtus.pro       | W   | 0.698      | 0.769        | 0.483 (0.259)    | 0.327 (0.175)    | 1 (0.698) |    17.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1933 | 2024-05-15 | BetBoom          | W   | 0.686      | 0.769        | 0.259 (0.136)    | 0.554 (0.292)    | 1 (0.686) |     9.39 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1999 | 2024-05-14 | Virtus.pro       | L   | 0.679      | -            | -                | -                | -         |    -3.78 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     2372 | 2024-04-27 | G2               | L   | 0.565      | -            | -                | -                | -         |    -0.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     2397 | 2024-04-26 | BetBoom          | L   | 0.558      | -            | -                | -                | -         |    -9.26 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     2423 | 2024-04-25 | TYLOO            | W   | 0.551      | 0.889        | 0.020 (0.010)    | 0.095 (0.047)    | 1 (0.551) |     0.40 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2443 | 2024-04-24 | The MongolZ      | L   | 0.545      | -            | -                | -                | -         |    -1.15 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3618 | 2024-03-06 | Metizport        | L   | 0.220      | -            | -                | -                | -         |    -6.61 | Maden, Magisk, s1mple, Snappi, SunPayus  |
|           10 |     4069 | 2024-02-16 | AMKAL            | L   | 0.091      | -            | -                | -                | -         |    -2.41 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            9 |     4099 | 2024-02-15 | Eternal Fire     | L   | 0.084      | -            | -                | -                | -         |    -0.47 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            8 |     4125 | 2024-02-14 | FaZe             | L   | 0.079      | -            | -                | -                | -         |    -0.45 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            7 |     4129 | 2024-02-14 | 3DMAX            | W   | 0.078      | 0.143        | -                | 1.000 (0.011)    | 1 (0.078) |     1.98 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            6 |     4185 | 2024-02-10 | Spirit           | L   | 0.053      | -            | -                | -                | -         |    -0.11 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            5 |     4198 | 2024-02-09 | ENCE             | W   | 0.047      | 1.000        | 0.175 (0.008)    | 0.404 (0.019)    | 1 (0.047) |     0.83 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            4 |     4233 | 2024-02-06 | Natus Vincere    | W   | 0.026      | 1.000        | 1.000 (0.026)    | -                | -         |     0.77 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            3 |     4242 | 2024-02-05 | Complexity       | W   | 0.020      | -            | -                | -                | -         |     0.47 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            2 |     4256 | 2024-02-04 | Rebels           | W   | 0.013      | -            | -                | -                | -         |     0.03 | BOROS, Maden, Magisk, Snappi, SunPayus   |
|            1 |     4298 | 2024-02-03 | Eternal Fire     | L   | 0.005      | -            | -                | -                | -         |    -0.03 | BOROS, Maden, Magisk, Snappi, SunPayus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($68,247.76)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $20,000.00     | $17,971.04      |
| 2024-06-02 |      0.807 | $5,000.00      | $4,034.40       |
| 2024-05-19 |      0.712 | $50,000.00     | $35,594.05      |
| 2024-05-12 |      0.666 | $7,000.00      | $4,660.13       |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |
| 2024-02-11 |      0.059 | $80,000.00     | $4,753.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
