### Roster Details<br />
Team Name: TYLOO<br />
Roster: Attacker, JamYoung, Jee, Mercury, Moseyuh<br />
Global Rank: [55](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_01_05.md)<br />
Regional Rank: [5]( ../../standings_asia_2026_01_05.md)<br />
<br />
Final Rank Value:  1188.4<br />
<br />
Final Rank Value (1188.4) = Starting Rank Value (1134.6) + Head To Head Adjustments (53.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.565[<sup>1</sup>](#table2)
- Bounty Collected: 0.436[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.349[<sup>2</sup>](#table1)

The average of these factors is 0.370<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1134.6
- 400 + ( ( 0.370 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1134.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      448 | 2025-12-01 | Liquid            | L   | 0.968      | -            | -                | -                | -         |    -2.20 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           30 |      476 | 2025-11-30 | M80               | L   | 0.959      | -            | -                | -                | -         |    -4.08 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           29 |      509 | 2025-11-29 | Ninjas in Pyjamas | L   | 0.954      | -            | -                | -                | -         |    -3.76 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           28 |      528 | 2025-11-29 | PARIVISION        | W   | 0.952      | 0.809        | 0.161 (0.124)    | 0.632 (0.487)    | 1 (0.952) |    26.71 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           27 |      924 | 2025-11-13 | paiN              | L   | 0.845      | -            | -                | -                | -         |    -2.79 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           26 |      950 | 2025-11-12 | Vitality          | L   | 0.839      | -            | -                | -                | -         |    -0.29 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           25 |     1287 | 2025-11-04 | paiN              | L   | 0.785      | -            | -                | -                | -         |    -2.58 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           24 |     1321 | 2025-11-02 | Falcons           | L   | 0.776      | -            | -                | -                | -         |    -0.39 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           23 |     1883 | 2025-10-15 | FaZe              | L   | 0.657      | -            | -                | -                | -         |    -0.52 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           22 |     1919 | 2025-10-15 | fnatic            | L   | 0.652      | -            | -                | -                | -         |    -2.67 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           21 |     1949 | 2025-10-14 | Fluxo             | W   | 0.644      | 1.000        | 0.036 (0.023)    | 0.473 (0.305)    | 1 (0.644) |    12.62 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           20 |     2984 | 2025-09-16 | Liquid            | L   | 0.460      | -            | -                | -                | -         |    -0.85 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           19 |     3022 | 2025-09-15 | The MongolZ       | L   | 0.452      | -            | -                | -                | -         |    -0.30 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           18 |     3043 | 2025-09-14 | Aurora            | L   | 0.447      | -            | -                | -                | -         |    -0.41 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           17 |     3160 | 2025-09-12 | GamerLegion       | W   | 0.431      | 1.000        | 0.239 (0.103)    | 0.463 (0.200)    | 1 (0.431) |    12.16 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           16 |     3496 | 2025-08-31 | 3DMAX             | L   | 0.352      | -            | -                | -                | -         |    -0.47 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           15 |     3502 | 2025-08-31 | Lynn Vision       | W   | 0.351      | 0.412        | 0.131 (0.019)    | 0.248 (0.036)    | 1 (0.351) |     6.90 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           14 |     3553 | 2025-08-29 | 3DMAX             | L   | 0.339      | -            | -                | -                | -         |    -0.44 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           13 |     3572 | 2025-08-29 | B8                | W   | 0.338      | 0.412        | 0.259 (0.036)    | 0.451 (0.063)    | 1 (0.338) |    10.27 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           12 |     3713 | 2025-08-21 | Vitality          | L   | 0.288      | -            | -                | -                | -         |    -0.07 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           11 |     3749 | 2025-08-20 | Astralis          | W   | 0.280      | 1.000        | 0.375 (0.105)    | 0.334 (0.094)    | 1 (0.280) |     8.22 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|           10 |     4063 | 2025-08-12 | Morningstar       | L   | 0.225      | -            | -                | -                | -         |    -3.80 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            9 |     4113 | 2025-08-11 | L4S               | L   | 0.219      | -            | -                | -                | -         |    -6.68 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            8 |     4416 | 2025-07-25 | 3DMAX             | L   | 0.107      | -            | -                | -                | -         |    -0.14 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            7 |     4438 | 2025-07-24 | Passion UA        | W   | 0.099      | 0.769        | -                | 0.507 (0.039)    | 1 (0.099) |     2.88 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            6 |     4453 | 2025-07-23 | Virtus.pro        | L   | 0.092      | -            | -                | -                | -         |    -1.41 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            5 |     4472 | 2025-07-20 | Astralis          | W   | 0.074      | 1.000        | 0.375 (0.028)    | 0.334 (0.025)    | 1 (0.074) |     2.15 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            4 |     4501 | 2025-07-19 | SAW               | W   | 0.066      | 1.000        | 0.315 (0.021)    | 0.657 (0.043)    | 1 (0.066) |     1.95 | Attacker, JamYoung, Jee, Mercury, Moseyuh     |
|            3 |     4540 | 2025-07-18 | 3DMAX             | W   | 0.058      | 1.000        | 0.523 (0.030)    | 0.515 (0.030)    | 1 (0.058) |     1.76 | Attacker, JamYoung, Mercury, Moseyuh, zhokiNg |
|            2 |     4577 | 2025-07-16 | Astralis          | W   | 0.047      | 1.000        | 0.375 (0.018)    | -                | -         |     1.39 | Attacker, JamYoung, Mercury, Moseyuh, zhokiNg |
|            1 |     4600 | 2025-07-15 | Virtus.pro        | W   | 0.040      | -            | -                | -                | -         |     0.67 | Attacker, JamYoung, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($72,846.22)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-02 |      0.974 | $10,000.00     | $9,744.70       |
| 2025-11-16 |      0.866 | $10,000.00     | $8,656.65       |
| 2025-11-09 |      0.819 | $4,000.00      | $3,274.20       |
| 2025-10-19 |      0.679 | $10,000.00     | $6,785.63       |
| 2025-09-21 |      0.494 | $15,000.00     | $7,416.73       |
| 2025-08-31 |      0.352 | $8,351.00      | $2,940.81       |
| 2025-08-24 |      0.306 | $40,000.00     | $12,228.89      |
| 2025-07-25 |      0.107 | $4,500.00      | $483.56         |
| 2025-07-20 |      0.074 | $290,000.00    | $21,315.04      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
