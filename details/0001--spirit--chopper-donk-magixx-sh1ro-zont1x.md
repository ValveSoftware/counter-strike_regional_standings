### Roster Details<br />
Team Name: Spirit<br />
Roster: chopper, donk, magixx, sh1ro, zont1x<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [1](../standings_global.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
Final Rank Value:  2043.8<br />
<br />
Final Rank Value (2043.8) = Starting Rank Value (2000.0) + Head To Head Adjustments (43.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.736[<sup>2</sup>](#table1)
- Opponent Network: 0.298[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.759<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.759 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      154 | 2024-06-16 | Natus Vincere | W   | 1.000      | 0.729        | 1.000 (0.729)    | 0.306 (0.223)    | 1 (1.000) |    10.02 | chopper, donk, magixx, sh1ro, zont1x |
|           35 |      188 | 2024-06-15 | Vitality      | W   | 1.000      | 0.729        | 0.733 (0.534)    | 0.395 (0.288)    | 1 (1.000) |    12.91 | chopper, donk, magixx, sh1ro, zont1x |
|           34 |      254 | 2024-06-13 | Virtus.pro    | W   | 1.000      | 0.729        | 0.347 (0.253)    | 0.391 (0.285)    | 1 (1.000) |     5.14 | chopper, donk, magixx, sh1ro, zont1x |
|           33 |      283 | 2024-06-12 | G2            | W   | 1.000      | 0.729        | 0.745 (0.543)    | 0.481 (0.351)    | 1 (1.000) |    11.85 | chopper, donk, magixx, sh1ro, zont1x |
|           32 |      747 | 2024-06-01 | Vitality      | L   | 0.934      | -            | -                | -                | -         |   -16.21 | chopper, donk, magixx, sh1ro, zont1x |
|           31 |      831 | 2024-05-29 | FaZe          | W   | 0.914      | 0.624        | 0.936 (0.534)    | 0.491 (0.280)    | 1 (0.914) |    11.15 | chopper, donk, magixx, sh1ro, zont1x |
|           30 |      860 | 2024-05-28 | Natus Vincere | W   | 0.907      | 0.624        | 1.000 (0.566)    | -                | 1 (0.907) |    10.01 | chopper, donk, magixx, sh1ro, zont1x |
|           29 |      876 | 2024-05-27 | FlyQuest      | W   | 0.901      | 0.624        | -                | 0.417 (0.235)    | 1 (0.901) |     0.89 | chopper, donk, magixx, sh1ro, zont1x |
|           28 |     1098 | 2024-05-19 | MOUZ          | L   | 0.846      | -            | -                | -                | -         |   -13.33 | chopper, donk, magixx, sh1ro, zont1x |
|           27 |     1135 | 2024-05-18 | Falcons       | W   | 0.839      | 0.769        | 0.352 (0.227)    | 0.285 (0.183)    | 1 (0.839) |     2.21 | chopper, donk, magixx, sh1ro, zont1x |
|           26 |     1199 | 2024-05-16 | HEROIC        | W   | 0.826      | 0.769        | 0.338 (0.215)    | 0.480 (0.305)    | 1 (0.826) |     4.45 | chopper, donk, magixx, sh1ro, zont1x |
|           25 |     1257 | 2024-05-15 | Aurora        | W   | 0.818      | 0.769        | 0.518 (0.326)    | 0.853 (0.536)    | 1 (0.818) |     2.08 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |     2445 | 2024-03-28 | FaZe          | L   | 0.501      | -            | -                | -                | -         |   -10.21 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |     2553 | 2024-03-22 | Natus Vincere | W   | 0.460      | 1.000        | 1.000 (0.460)    | -                | -         |     5.40 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |     2568 | 2024-03-21 | Imperial      | W   | 0.454      | 1.000        | -                | 0.646 (0.293)    | -         |     0.78 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     2580 | 2024-03-21 | Cloud9        | W   | 0.453      | -            | -                | -                | -         |     0.22 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     2825 | 2024-03-10 | Metizport     | W   | 0.381      | -            | -                | -                | -         |     0.04 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     2845 | 2024-03-09 | BIG           | W   | 0.374      | -            | -                | -                | -         |     0.37 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     2880 | 2024-03-08 | Elevate       | W   | 0.366      | -            | -                | -                | -         |     0.06 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     3235 | 2024-02-21 | HEROIC        | W   | 0.260      | -            | -                | -                | -         |     1.78 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     3266 | 2024-02-20 | MOUZ          | L   | 0.253      | -            | -                | -                | -         |    -4.63 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     3285 | 2024-02-19 | Astralis      | W   | 0.247      | -            | -                | -                | -         |     2.93 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     3300 | 2024-02-19 | ENCE          | W   | 0.245      | -            | -                | -                | -         |     0.43 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     3483 | 2024-02-11 | FaZe          | W   | 0.194      | -            | -                | -                | -         |     2.29 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     3491 | 2024-02-10 | Falcons       | W   | 0.187      | -            | -                | -                | -         |     0.55 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     3540 | 2024-02-06 | FaZe          | W   | 0.160      | -            | -                | -                | -         |     1.88 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     3569 | 2024-02-04 | Complexity    | W   | 0.146      | -            | -                | -                | -         |     1.19 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     3590 | 2024-02-03 | Natus Vincere | W   | 0.140      | -            | -                | -                | -         |     1.67 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     3664 | 2024-02-01 | The MongolZ   | W   | 0.126      | -            | -                | -                | -         |     1.91 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3677 | 2024-01-31 | Apeks         | W   | 0.120      | -            | -                | -                | -         |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3769 | 2024-01-25 | FaZe          | L   | 0.079      | -            | -                | -                | -         |    -1.56 | baz, chopper, hally, sh1ro, zont1x   |
|            5 |     3784 | 2024-01-24 | Liquid        | L   | 0.073      | -            | -                | -                | -         |    -2.06 | baz, chopper, hally, sh1ro, zont1x   |
|            4 |     3901 | 2024-01-20 | MOUZ          | W   | 0.046      | -            | -                | -                | -         |     0.63 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3955 | 2024-01-19 | ex-Preasy     | W   | 0.039      | -            | -                | -                | -         |     0.00 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3998 | 2024-01-18 | Entropiq      | W   | 0.034      | -            | -                | -                | -         |     0.00 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     4026 | 2024-01-18 | KOI           | L   | 0.033      | -            | -                | -                | -         |    -1.02 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($412,388.89)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $200,000.00    | $200,000.00     |
| 2024-06-02 |      0.941 | $20,000.00     | $18,820.06      |
| 2024-05-19 |      0.846 | $100,000.00    | $84,600.40      |
| 2024-03-31 |      0.521 | $45,000.00     | $23,428.73      |
| 2024-03-10 |      0.381 | $20,000.00     | $7,619.84       |
| 2024-02-11 |      0.194 | $400,000.00    | $77,418.27      |
| 2024-01-28 |      0.100 | $5,000.00      | $501.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
