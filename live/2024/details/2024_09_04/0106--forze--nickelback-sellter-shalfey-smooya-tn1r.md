### Roster Details<br />
Team Name: FORZE<br />
Roster: NickelBack, SELLTER, shalfey, smooya, tN1R<br />
Global Rank: [106](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [77]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  820.9<br />
<br />
Final Rank Value (820.9) = Starting Rank Value (805.1) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.345[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.038[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 805.1
- 400 + ( ( 0.205 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 805.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3420 | 2024-05-04 | Monte           | L   | 0.379      | -            | -                | -                | -         |    -3.69 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           16 |     3451 | 2024-05-02 | GamerLegion     | L   | 0.368      | -            | -                | -                | -         |    -2.52 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           15 |     3478 | 2024-05-01 | FURIA           | W   | 0.361      | 0.889        | 0.317 (0.102)    | 0.531 (0.170)    | 1 (0.361) |    11.25 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           14 |     3500 | 2024-04-30 | Monte           | L   | 0.354      | -            | -                | -                | -         |    -3.39 | NickelBack, SELLTER, shalfey, smooya, tN1R |
|           13 |     3954 | 2024-04-12 | BIG             | L   | 0.234      | -            | -                | -                | -         |    -0.66 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           12 |     3987 | 2024-04-11 | Aurora          | L   | 0.226      | -            | -                | -                | -         |    -0.21 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|           11 |     4019 | 2024-04-10 | TSM             | W   | 0.221      | 0.500        | 0.004 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     1.90 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|           10 |     4071 | 2024-04-09 | brazylijski luz | W   | 0.215      | 0.500        | 0.006 (0.001)    | 0.171 (0.018)    | 0 (0.000) |     2.70 | kelieN, SELLTER, shalfey, spirit, tN1R     |
|            9 |     4111 | 2024-04-08 | ENCE            | W   | 0.206      | 0.684        | 0.132 (0.019)    | 0.345 (0.049)    | 0 (0.000) |     6.05 | kelieN, SELLTER, shalfey, sstiNiX, tN1R    |
|            8 |     4388 | 2024-03-27 | 500             | L   | 0.127      | -            | -                | -                | -         |    -2.81 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            7 |     4419 | 2024-03-26 | Apeks           | W   | 0.119      | 0.500        | 0.014 (0.001)    | 0.075 (0.005)    | 0 (0.000) |     1.71 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            6 |     4424 | 2024-03-25 | B8              | L   | 0.114      | -            | -                | -                | -         |    -0.74 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            5 |     4429 | 2024-03-24 | BetBoom         | W   | 0.106      | 0.143        | 0.232 (0.004)    | 0.521 (0.008)    | 0 (0.000) |     3.11 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            4 |     4441 | 2024-03-23 | VP.Prodigy      | W   | 0.100      | 0.143        | 0.020 (0.000)    | 0.261 (0.004)    | 0 (0.000) |     1.68 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            3 |     4455 | 2024-03-22 | ex-Preasy       | W   | 0.093      | 0.143        | 0.004 (0.000)    | 0.022 (0.000)    | 0 (0.000) |     0.99 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            2 |     4476 | 2024-03-21 | PARIVISION      | L   | 0.087      | -            | -                | -                | -         |    -0.44 | gokushima, r3salt, SELLTER, shalfey, tN1R  |
|            1 |     4502 | 2024-03-20 | NAVI Junior     | W   | 0.080      | 0.143        | 0.001 (0.000)    | 0.074 (0.001)    | 0 (0.000) |     0.85 | gokushima, r3salt, SELLTER, shalfey, tN1R  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,382.75)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.621 | $3,000.00      | $1,862.79       |
| 2024-05-12 |      0.434 | $7,000.00      | $3,034.99       |
| 2024-04-14 |      0.247 | $26,250.00     | $6,484.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
