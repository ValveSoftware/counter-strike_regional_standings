### Roster Details<br />
Team Name: G2<br />
Roster: hades, HeavyGod, huNter-, malbsMd, Snax<br />
Global Rank: [10](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  1566.2<br />
<br />
Final Rank Value (1566.2) = Starting Rank Value (1625.3) + Head To Head Adjustments (-59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.771[<sup>1</sup>](#table2)
- Bounty Collected: 0.630[<sup>2</sup>](#table1)
- Opponent Network: 0.358[<sup>2</sup>](#table1)
- LAN Wins: 0.868[<sup>2</sup>](#table1)

The average of these factors is 0.657<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1625.3
- 400 + ( ( 0.657 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 1625.3


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
|           38 |      163 | 2025-06-15 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -8.08 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           37 |      188 | 2025-06-14 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -14.40 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           36 |      242 | 2025-06-13 | Aurora            | W   | 1.000      | 1.000        | 0.692 (0.692)    | 0.586 (0.586)    | 1 (1.000) |    19.67 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           35 |      258 | 2025-06-12 | paiN              | W   | 1.000      | 1.000        | 0.292 (0.292)    | 0.325 (0.325)    | 1 (1.000) |    10.19 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           34 |      273 | 2025-06-12 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -16.73 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           33 |      554 | 2025-05-21 | GamerLegion       | L   | 0.889      | -            | -                | -                | -         |   -15.99 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           32 |      558 | 2025-05-21 | 3DMAX             | W   | 0.888      | 1.000        | 0.265 (0.235)    | 0.429 (0.381)    | 1 (0.888) |    12.28 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           31 |      580 | 2025-05-20 | The MongolZ       | L   | 0.882      | -            | -                | -                | -         |    -6.45 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           30 |      611 | 2025-05-19 | Lynn Vision       | W   | 0.875      | 1.000        | 0.176 (0.154)    | 0.660 (0.577)    | 1 (0.875) |     6.46 | hades, HeavyGod, huNter-, malbsMd, Snax  |
|           29 |      737 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.837      | -            | -                | -                | -         |   -20.23 | hades, HeavyGod, malbsMd, Snax, TaZ      |
|           28 |      775 | 2025-05-13 | BIG               | W   | 0.831      | 1.000        | 0.175 (0.146)    | 0.400 (0.332)    | 1 (0.831) |     2.75 | hades, HeavyGod, malbsMd, Snax, TaZ      |
|           27 |      791 | 2025-05-12 | M80               | W   | 0.826      | -            | -                | -                | 1 (0.826) |     0.83 | hades, HeavyGod, malbsMd, Snax, TaZ      |
|           26 |      813 | 2025-05-11 | ODDIK             | L   | 0.820      | -            | -                | -                | -         |   -25.22 | hades, HeavyGod, malbsMd, Snax, TaZ      |
|           25 |      853 | 2025-05-10 | MIBR              | L   | 0.811      | -            | -                | -                | -         |   -21.88 | hades, HeavyGod, malbsMd, Snax, TaZ      |
|           24 |     1454 | 2025-04-13 | Falcons           | L   | 0.633      | -            | -                | -                | -         |    -6.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           23 |     1466 | 2025-04-12 | Complexity        | W   | 0.627      | 1.000        | -                | 0.432 (0.271)    | 1 (0.627) |     3.02 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           22 |     1491 | 2025-04-11 | Virtus.pro        | W   | 0.620      | 1.000        | 0.237 (0.147)    | 0.467 (0.290)    | 1 (0.620) |     7.86 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           21 |     1582 | 2025-04-08 | Complexity        | W   | 0.599      | 1.000        | -                | 0.432 (0.259)    | 1 (0.599) |     2.61 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           20 |     1623 | 2025-04-07 | Rare Atom         | W   | 0.591      | 1.000        | -                | 0.564 (0.333)    | 1 (0.591) |     1.84 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           19 |     1639 | 2025-04-06 | GamerLegion       | W   | 0.585      | 1.000        | 0.390 (0.228)    | 0.395 (0.231)    | -         |     7.05 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           18 |     1977 | 2025-03-28 | MOUZ              | L   | 0.527      | -            | -                | -                | -         |    -2.74 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           17 |     2172 | 2025-03-24 | The MongolZ       | W   | 0.500      | 0.715        | 1.000 (0.358)    | -                | -         |    12.17 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           16 |     2193 | 2025-03-23 | M80               | W   | 0.494      | -            | -                | -                | -         |     0.38 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           15 |     2213 | 2025-03-22 | Aurora            | L   | 0.487      | -            | -                | -                | -         |    -4.97 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           14 |     2269 | 2025-03-20 | Imperial          | W   | 0.472      | -            | -                | -                | -         |     0.53 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           13 |     2452 | 2025-03-13 | MOUZ              | L   | 0.428      | -            | -                | -                | -         |    -2.25 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           12 |     2486 | 2025-03-11 | GamerLegion       | W   | 0.414      | 1.000        | 0.390 (0.161)    | -                | -         |     5.27 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           11 |     2523 | 2025-03-10 | Natus Vincere     | L   | 0.407      | -            | -                | -                | -         |    -6.81 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|           10 |     2592 | 2025-03-09 | SAW               | W   | 0.399      | -            | -                | -                | -         |     0.41 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            9 |     2662 | 2025-03-08 | The MongolZ       | L   | 0.393      | -            | -                | -                | -         |    -2.69 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            8 |     2717 | 2025-03-07 | paiN              | W   | 0.387      | -            | -                | -                | -         |     4.47 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            7 |     3671 | 2025-02-03 | FaZe              | L   | 0.174      | -            | -                | -                | -         |    -2.00 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            6 |     3688 | 2025-02-02 | Falcons           | W   | 0.167      | 1.000        | 1.000 (0.167)    | -                | -         |     3.77 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            5 |     3702 | 2025-02-01 | Virtus.pro        | L   | 0.160      | -            | -                | -                | -         |    -2.95 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            4 |     3808 | 2025-01-25 | Aurora            | L   | 0.113      | -            | -                | -                | -         |    -1.06 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            3 |     3872 | 2025-01-23 | BetBoom           | W   | 0.100      | -            | -                | -                | -         |     0.15 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            2 |     3947 | 2025-01-19 | BIG               | W   | 0.075      | -            | -                | -                | -         |     0.23 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |
|            1 |     3955 | 2025-01-17 | B8                | W   | 0.062      | -            | -                | -                | -         |     0.36 | HeavyGod, huNter-, m0NESY, malbsMd, Snax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($252,513.46)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.51) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-05-25 |      0.915 | $47,000.00     | $42,984.83      |
| 2025-05-18 |      0.866 | $31,250.00     | $27,068.25      |
| 2025-04-13 |      0.633 | $187,500.00    | $118,718.23     |
| 2025-03-30 |      0.541 | $20,000.00     | $10,813.87      |
| 2025-03-16 |      0.447 | $58,000.00     | $25,912.91      |
| 2025-02-09 |      0.214 | $23,000.00     | $4,911.09       |
| 2025-01-26 |      0.120 | $17,500.00     | $2,104.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
