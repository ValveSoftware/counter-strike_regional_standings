### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Global Rank: [2](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [2]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1861.0<br />
<br />
Final Rank Value (1861.0) = Starting Rank Value (1901.7) + Head To Head Adjustments (-40.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.708[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.750<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1901.7
- 400 + ( ( 0.750 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1901.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      131 | 2024-11-18 | SAW               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.51 | Aleksib, b1t, iM, jL, w0nderful |
|           40 |      142 | 2024-11-18 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |   -22.66 | Aleksib, b1t, iM, jL, w0nderful |
|           39 |      165 | 2024-11-17 | SINNERS           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.50 | Aleksib, b1t, iM, jL, w0nderful |
|           38 |      173 | 2024-11-16 | fnatic            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.15 | Aleksib, b1t, iM, jL, w0nderful |
|           37 |      572 | 2024-10-31 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -25.75 | Aleksib, b1t, iM, jL, w0nderful |
|           36 |      593 | 2024-10-30 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -28.88 | Aleksib, b1t, iM, jL, w0nderful |
|           35 |      900 | 2024-10-13 | MOUZ              | W   | 0.915      | 0.624        | 0.446 (0.255)    | 0.396 (0.226)    | 1 (0.915) |     6.31 | Aleksib, b1t, iM, jL, w0nderful |
|           34 |      920 | 2024-10-12 | HEROIC            | W   | 0.908      | 0.624        | 0.597 (0.338)    | 0.550 (0.312)    | 1 (0.908) |     5.63 | Aleksib, b1t, iM, jL, w0nderful |
|           33 |      938 | 2024-10-11 | Virtus.pro        | W   | 0.901      | -            | -                | -                | 1 (0.901) |     2.93 | Aleksib, b1t, iM, jL, w0nderful |
|           32 |      982 | 2024-10-09 | FURIA             | L   | 0.888      | -            | -                | -                | -         |   -24.35 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |     1036 | 2024-10-07 | Liquid            | W   | 0.877      | -            | -                | -                | 1 (0.877) |     3.19 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |     1049 | 2024-10-07 | Imperial          | W   | 0.874      | 0.624        | -                | 0.583 (0.318)    | 1 (0.874) |     0.52 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |     1311 | 2024-09-29 | G2                | L   | 0.821      | -            | -                | -                | -         |   -11.51 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |     1338 | 2024-09-28 | FaZe              | W   | 0.816      | 0.729        | 0.329 (0.195)    | -                | 1 (0.816) |     3.81 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |     1446 | 2024-09-26 | G2                | W   | 0.801      | 0.729        | 1.000 (0.584)    | 0.373 (0.218)    | 1 (0.801) |    13.73 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |     1502 | 2024-09-25 | Falcons           | W   | 0.793      | -            | -                | -                | -         |     0.60 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |     1603 | 2024-09-22 | Eternal Fire      | W   | 0.775      | 0.889        | 0.415 (0.286)    | 0.445 (0.306)    | -         |     5.19 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |     1627 | 2024-09-21 | G2                | W   | 0.769      | 0.889        | 1.000 (0.683)    | 0.373 (0.255)    | -         |    14.23 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1658 | 2024-09-20 | Spirit            | W   | 0.761      | 0.889        | 1.000 (0.676)    | 0.515 (0.348)    | -         |    11.53 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     2023 | 2024-09-07 | Eternal Fire      | W   | 0.675      | 0.889        | 0.415 (0.249)    | 0.445 (0.267)    | -         |     4.49 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     2135 | 2024-09-04 | Ninjas in Pyjamas | W   | 0.655      | -            | -                | -                | -         |     0.56 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2179 | 2024-09-03 | Lynn Vision       | W   | 0.647      | -            | -                | -                | -         |     0.17 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2759 | 2024-08-18 | Vitality          | L   | 0.542      | -            | -                | -                | -         |    -9.25 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2781 | 2024-08-17 | MOUZ              | W   | 0.535      | 1.000        | 0.446 (0.239)    | -                | -         |     4.55 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2896 | 2024-08-13 | SAW               | W   | 0.507      | 1.000        | -                | 0.674 (0.342)    | -         |     3.01 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     2973 | 2024-08-11 | Astralis          | W   | 0.494      | -            | -                | -                | -         |     1.74 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     2990 | 2024-08-10 | paiN              | W   | 0.488      | 1.000        | -                | 0.703 (0.343)    | -         |     1.78 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     3195 | 2024-08-04 | Complexity        | W   | 0.447      | -            | -                | -                | -         |     1.22 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     3220 | 2024-08-03 | Liquid            | L   | 0.442      | -            | -                | -                | -         |   -12.38 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3257 | 2024-08-02 | BIG               | W   | 0.435      | -            | -                | -                | -         |     1.14 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3299 | 2024-08-01 | Liquid            | L   | 0.428      | -            | -                | -                | -         |   -12.15 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3355 | 2024-07-31 | BIG               | W   | 0.421      | -            | -                | -                | -         |     1.01 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3670 | 2024-07-21 | G2                | W   | 0.355      | 1.000        | 1.000 (0.355)    | -                | -         |     7.07 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     3702 | 2024-07-20 | MOUZ              | W   | 0.349      | -            | -                | -                | -         |     2.80 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     3732 | 2024-07-19 | FaZe              | W   | 0.342      | -            | -                | -                | -         |     2.13 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     3870 | 2024-07-17 | FURIA             | W   | 0.328      | -            | -                | -                | -         |     1.31 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     4189 | 2024-06-16 | Spirit            | L   | 0.121      | -            | -                | -                | -         |    -1.92 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     4213 | 2024-06-15 | Virtus.pro        | W   | 0.115      | -            | -                | -                | -         |     0.41 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4303 | 2024-06-13 | FaZe              | W   | 0.101      | -            | -                | -                | -         |     0.63 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4332 | 2024-06-12 | Astralis          | W   | 0.094      | -            | -                | -                | -         |     0.31 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4874 | 2024-05-29 | HEROIC            | L   | 0.001      | -            | -                | -                | -         |    -0.03 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($563,906.85)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-10-13 |      0.915 | $100,000.00    | $91,539.88      |
| 2024-09-29 |      0.821 | $85,000.00     | $69,810.08      |
| 2024-09-22 |      0.775 | $170,000.00    | $131,802.76     |
| 2024-08-18 |      0.542 | $180,000.00    | $97,542.64      |
| 2024-08-04 |      0.447 | $12,500.00     | $5,593.40       |
| 2024-07-21 |      0.355 | $400,000.00    | $142,170.90     |
| 2024-06-16 |      0.121 | $85,000.00     | $10,302.36      |
| 2024-06-02 |      0.029 | $5,000.00      | $144.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
