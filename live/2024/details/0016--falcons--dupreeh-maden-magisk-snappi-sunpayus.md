### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, Snappi, SunPayus<br />
Global Rank: [16](../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../standings_europe_2024_08_14.md)<br />
Regional Rank: [12]( ../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  1497.5<br />
<br />
Final Rank Value (1497.5) = Starting Rank Value (1518.8) + Head To Head Adjustments (-21.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.624[<sup>1</sup>](#table2)
- Bounty Collected: 0.548[<sup>2</sup>](#table1)
- Opponent Network: 0.170[<sup>2</sup>](#table1)
- LAN Wins: 0.926[<sup>2</sup>](#table1)

The average of these factors is 0.567<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1518.8
- 400 + ( ( 0.567 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1518.8


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
|           26 |       43 | 2024-08-13 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -7.69 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |       91 | 2024-08-12 | Virtus.pro       | W   | 1.000      | 1.000        | 0.512 (0.512)    | 0.282 (0.282)    | 1 (1.000) |    19.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |      117 | 2024-08-11 | MOUZ             | L   | 1.000      | -            | -                | -                | -         |    -3.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |      158 | 2024-08-09 | BIG              | W   | 1.000      | 0.143        | 0.155 (0.022)    | 0.275 (0.039)    | 1 (1.000) |     7.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |      180 | 2024-08-08 | ALTERNATE aTTaX  | W   | 1.000      | 0.143        | -                | 0.496 (0.071)    | 1 (1.000) |     0.86 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |      224 | 2024-08-07 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |   -11.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |      412 | 2024-08-02 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -8.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |      534 | 2024-07-30 | GamerLegion      | W   | 1.000      | 0.581        | 0.160 (0.093)    | 0.238 (0.138)    | 1 (1.000) |     2.96 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |      565 | 2024-07-29 | Astralis         | L   | 1.000      | -            | -                | -                | -         |    -8.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     1333 | 2024-06-16 | Complexity       | L   | 0.805      | -            | -                | -                | -         |    -9.46 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     1338 | 2024-06-16 | ENCE             | W   | 0.805      | 0.500        | 0.160 (0.064)    | 0.393 (0.158)    | 1 (0.805) |     6.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     1367 | 2024-06-15 | The MongolZ      | W   | 0.799      | 0.500        | 1.000 (0.399)    | 0.738 (0.295)    | 1 (0.799) |    21.92 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     1377 | 2024-06-15 | Party Astronauts | W   | 0.797      | 0.500        | 0.038 (0.015)    | 0.494 (0.197)    | 1 (0.797) |     1.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     1420 | 2024-06-14 | Aurora           | L   | 0.790      | -            | -                | -                | -         |   -16.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     2026 | 2024-05-28 | Liquid           | L   | 0.681      | -            | -                | -                | -         |    -5.98 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     2047 | 2024-05-27 | Monte            | W   | 0.674      | 0.624        | 0.101 (0.043)    | 0.425 (0.179)    | 1 (0.674) |     1.75 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     2059 | 2024-05-27 | G2               | L   | 0.673      | -            | -                | -                | -         |    -1.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     2310 | 2024-05-18 | Spirit           | L   | 0.611      | -            | -                | -                | -         |    -2.91 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     2340 | 2024-05-17 | Virtus.pro       | W   | 0.605      | 0.769        | 0.512 (0.238)    | 0.282 (0.131)    | 1 (0.605) |    12.22 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     2414 | 2024-05-15 | BetBoom          | W   | 0.593      | 0.769        | 0.223 (0.102)    | 0.456 (0.208)    | 1 (0.593) |     4.51 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     2480 | 2024-05-14 | Virtus.pro       | L   | 0.586      | -            | -                | -                | -         |    -6.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     2853 | 2024-04-27 | G2               | L   | 0.472      | -            | -                | -                | -         |    -1.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     2878 | 2024-04-26 | BetBoom          | L   | 0.465      | -            | -                | -                | -         |   -11.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     2904 | 2024-04-25 | TYLOO            | W   | 0.458      | 0.889        | 0.017 (0.007)    | -                | -         |     0.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     2924 | 2024-04-24 | The MongolZ      | L   | 0.452      | -            | -                | -                | -         |    -1.64 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4099 | 2024-03-06 | Metizport        | L   | 0.127      | -            | -                | -                | -         |    -3.93 | Maden, Magisk, s1mple, Snappi, SunPayus  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79,881.76)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-06-16 |      0.805 | $20,000.00     | $16,106.16      |
| 2024-06-02 |      0.714 | $5,000.00      | $3,568.18       |
| 2024-05-19 |      0.619 | $50,000.00     | $30,931.87      |
| 2024-05-12 |      0.572 | $7,000.00      | $4,007.42       |
| 2024-03-10 |      0.154 | $5,000.00      | $768.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
