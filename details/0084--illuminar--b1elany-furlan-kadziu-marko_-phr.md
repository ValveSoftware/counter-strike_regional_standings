### Roster Details<br />
Team Name: Illuminar<br />
Roster: b1elany, Furlan, kadziu, Markoś, phr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [84](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  952.1<br />
<br />
Final Rank Value (952.1) = Starting Rank Value (932.8) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.365[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.248<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 932.8
- 400 + ( ( 0.248 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 932.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       61 | 2024-07-16 | kONO              | W   | 1.000      | 0.371        | 0.042 (0.016)    | 0.595 (0.220)    | 0 (0.000) |    14.08 | b1elany, Furlan, kadziu, Markoś, phr     |
|           20 |      112 | 2024-07-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.371        | 0.050 (0.018)    | 0.644 (0.239)    | 0 (0.000) |    14.91 | b1elany, Furlan, kadziu, Markoś, phr     |
|           19 |      169 | 2024-07-11 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -15.76 | b1elany, Furlan, kadziu, Markoś, splawik |
|           18 |      363 | 2024-06-15 | B8                | L   | 0.986      | -            | -                | -                | -         |    -6.42 | b1elany, Furlan, kadziu, phr, ultimate   |
|           17 |      423 | 2024-06-13 | GamerLegion       | W   | 0.974      | 0.435        | 0.244 (0.103)    | 0.333 (0.141)    | 0 (0.000) |    26.99 | Furlan, kadziu, phr, splawik, ultimate   |
|           16 |      433 | 2024-06-13 | Enterprise        | L   | 0.973      | -            | -                | -                | -         |   -12.02 | b1elany, Furlan, kadziu, phr, ultimate   |
|           15 |      486 | 2024-06-11 | Sampi             | W   | 0.958      | 0.435        | 0.045 (0.019)    | 0.975 (0.406)    | 0 (0.000) |    14.64 | Furlan, kadziu, phr, splawik, ultimate   |
|           14 |      576 | 2024-06-09 | VP.Prodigy        | W   | 0.945      | 0.435        | 0.039 (0.016)    | 0.498 (0.205)    | 0 (0.000) |    16.39 | b1elany, Furlan, kadziu, phr, ultimate   |
|           13 |      610 | 2024-06-08 | 3DMAX             | W   | 0.940      | 0.450        | 0.209 (0.088)    | 1.000 (0.423)    | 0 (0.000) |    25.28 | b1elany, Furlan, kadziu, phr, ultimate   |
|           12 |      682 | 2024-06-07 | EYEBALLERS        | W   | 0.932      | 0.450        | 0.009 (0.004)    | 0.619 (0.260)    | 0 (0.000) |    17.52 | b1elany, Furlan, kadziu, phr, ultimate   |
|           11 |      691 | 2024-06-07 | CYBERSHOKE        | W   | 0.931      | 0.435        | 0.059 (0.024)    | 0.309 (0.125)    | 0 (0.000) |    14.46 | b1elany, Furlan, kadziu, phr, ultimate   |
|           10 |      729 | 2024-06-06 | Enterprise        | W   | 0.927      | 0.450        | 0.055 (0.023)    | 0.635 (0.265)    | 0 (0.000) |    19.53 | b1elany, Furlan, kadziu, phr, ultimate   |
|            9 |      804 | 2024-06-05 | Aurora Young Blud | L   | 0.919      | -            | -                | -                | -         |   -15.45 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            8 |      840 | 2024-06-04 | Passion UA        | L   | 0.913      | -            | -                | -                | -         |    -6.15 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            7 |      999 | 2024-05-29 | INFINITE          | L   | 0.874      | -            | -                | -                | -         |   -23.55 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            6 |     1010 | 2024-05-29 | Passion UA        | L   | 0.872      | -            | -                | -                | -         |    -7.69 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            5 |     1106 | 2024-05-24 | Enterprise        | L   | 0.839      | -            | -                | -                | -         |   -10.37 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            4 |     1108 | 2024-05-24 | MOUZ NXT          | L   | 0.838      | -            | -                | -                | -         |    -7.03 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            3 |     1163 | 2024-05-22 | Zero Tenacity     | L   | 0.825      | -            | -                | -                | -         |    -5.49 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            2 |     1200 | 2024-05-21 | NAVI Junior       | L   | 0.820      | -            | -                | -                | -         |   -22.58 | ANeraX, b1elany, Furlan, phr, ultimate   |
|            1 |     1236 | 2024-05-20 | Sampi             | L   | 0.813      | -            | -                | -                | -         |   -11.99 | ANeraX, b1elany, Furlan, phr, ultimate   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,486.29)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      0.999 | $2,500.00      | $2,498.72       |
| 2024-06-16 |      0.994 | $2,000.00      | $1,987.56       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
