### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl, s1zzi<br />
Global Rank: [16](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [12]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1582.4<br />
<br />
Final Rank Value (1582.4) = Starting Rank Value (1647.0) + Head To Head Adjustments (-64.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.675[<sup>1</sup>](#table2)
- Bounty Collected: 0.659[<sup>2</sup>](#table1)
- Opponent Network: 0.368[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.655<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1647.0
- 400 + ( ( 0.655 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1647.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      367 | 2026-05-22 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -5.48 | alex666, esenthial, kensizor, npl, s1zzi     |
|           44 |      377 | 2026-05-21 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -18.46 | alex666, esenthial, kensizor, npl, s1zzi     |
|           43 |      452 | 2026-05-20 | The MongolZ       | W   | 1.000      | 1.000        | 0.576 (0.576)    | 0.419 (0.419)    | 1 (1.000) |    23.08 | alex666, esenthial, kensizor, npl, s1zzi     |
|           42 |      460 | 2026-05-19 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.121 (0.121)    | 0.435 (0.435)    | 1 (1.000) |     9.17 | alex666, esenthial, kensizor, npl, s1zzi     |
|           41 |      612 | 2026-05-13 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -2.13 | alex666, esenthial, kensizor, npl, s1zzi     |
|           40 |      623 | 2026-05-13 | FUT               | W   | 1.000      | 1.000        | 0.812 (0.812)    | 0.355 (0.355)    | 1 (1.000) |    21.61 | alex666, esenthial, kensizor, npl, s1zzi     |
|           39 |      664 | 2026-05-12 | BC.Game           | W   | 1.000      | 1.000        | 0.047 (0.047)    | -                | 1 (1.000) |     1.80 | alex666, esenthial, kensizor, npl, s1zzi     |
|           38 |      701 | 2026-05-11 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -17.77 | alex666, esenthial, kensizor, npl, s1zzi     |
|           37 |     1541 | 2026-04-15 | Aurora            | L   | 0.887      | -            | -                | -                | -         |    -7.43 | alex666, esenthial, kensizor, npl, s1zzi     |
|           36 |     1556 | 2026-04-14 | Passion UA        | W   | 0.881      | 1.000        | -                | 0.419 (0.369)    | 1 (0.881) |     4.43 | alex666, esenthial, kensizor, npl, s1zzi     |
|           35 |     1577 | 2026-04-13 | Natus Vincere     | L   | 0.874      | -            | -                | -                | -         |    -3.16 | alex666, esenthial, kensizor, npl, s1zzi     |
|           34 |     1680 | 2026-04-09 | FUT               | L   | 0.846      | -            | -                | -                | -         |    -8.44 | alex666, esenthial, kensizor, npl, s1zzi     |
|           33 |     1712 | 2026-04-08 | Legacy            | W   | 0.839      | 1.000        | 1.000 (0.839)    | 0.614 (0.515)    | 1 (0.839) |    21.43 | alex666, esenthial, kensizor, npl, s1zzi     |
|           32 |     1750 | 2026-04-07 | Inner Circle      | W   | 0.832      | 1.000        | 0.054 (0.045)    | 0.534 (0.444)    | 1 (0.832) |     5.27 | alex666, esenthial, kensizor, npl, s1zzi     |
|           31 |     1780 | 2026-04-06 | 3DMAX             | L   | 0.826      | -            | -                | -                | -         |   -16.74 | alex666, esenthial, kensizor, npl, s1zzi     |
|           30 |     1838 | 2026-04-05 | Astralis          | L   | 0.819      | -            | -                | -                | -         |    -6.99 | alex666, esenthial, kensizor, npl, s1zzi     |
|           29 |     1913 | 2026-04-04 | Wildcard          | W   | 0.812      | 1.000        | 0.122 (0.099)    | 0.639 (0.519)    | 1 (0.812) |     5.86 | alex666, esenthial, kensizor, npl, s1zzi     |
|           28 |     2050 | 2026-04-02 | BESTIA            | W   | 0.801      | -            | -                | -                | 1 (0.801) |     4.79 | alex666, esenthial, kensizor, npl, s1zzi     |
|           27 |     2073 | 2026-04-02 | 3DMAX             | W   | 0.800      | 0.340        | 0.241 (0.066)    | -                | 1 (0.800) |     9.24 | alex666, esenthial, kensizor, npl, s1zzi     |
|           26 |     2107 | 2026-04-02 | Falcons Force     | W   | 0.798      | -            | -                | -                | -         |     0.54 | alex666, esenthial, kensizor, npl, s1zzi     |
|           25 |     2135 | 2026-04-01 | Phantom           | W   | 0.795      | 0.340        | -                | 0.736 (0.199)    | -         |     1.86 | alex666, esenthial, kensizor, npl, s1zzi     |
|           24 |     2158 | 2026-04-01 | 3DMAX             | L   | 0.793      | -            | -                | -                | -         |   -15.52 | alex666, esenthial, kensizor, npl, s1zzi     |
|           23 |     2200 | 2026-04-01 | Falcons Force     | W   | 0.791      | -            | -                | -                | -         |     0.41 | alex666, esenthial, kensizor, npl, s1zzi     |
|           22 |     2225 | 2026-03-31 | Phantom           | W   | 0.787      | 0.340        | -                | 0.736 (0.197)    | -         |     1.64 | alex666, esenthial, kensizor, npl, s1zzi     |
|           21 |     2250 | 2026-03-31 | AM                | W   | 0.787      | -            | -                | -                | -         |     3.86 | alex666, esenthial, kensizor, npl, s1zzi     |
|           20 |     2262 | 2026-03-31 | Z7                | W   | 0.786      | -            | -                | -                | -         |     0.05 | alex666, esenthial, kensizor, npl, s1zzi     |
|           19 |     2281 | 2026-03-31 | WAZABI            | L   | 0.785      | -            | -                | -                | -         |   -24.05 | alex666, esenthial, kensizor, npl, s1zzi     |
|           18 |     2296 | 2026-03-31 | maquinas          | W   | 0.785      | -            | -                | -                | -         |     0.03 | alex666, esenthial, kensizor, npl, s1zzi     |
|           17 |     2959 | 2026-03-20 | NRG               | L   | 0.712      | -            | -                | -                | -         |   -19.68 | alex666, esenthial, kensizor, npl, s1zzi     |
|           16 |     3034 | 2026-03-18 | Natus Vincere     | L   | 0.700      | -            | -                | -                | -         |    -3.40 | alex666, esenthial, kensizor, npl, s1zzi     |
|           15 |     3460 | 2026-03-09 | FUT               | L   | 0.639      | -            | -                | -                | -         |    -8.57 | alex666, esenthial, kensizor, npl, s1zzi     |
|           14 |     3529 | 2026-03-08 | Natus Vincere     | L   | 0.633      | -            | -                | -                | -         |    -3.52 | alex666, esenthial, kensizor, npl, s1zzi     |
|           13 |     3561 | 2026-03-07 | Spirit            | L   | 0.628      | -            | -                | -                | -         |    -2.60 | alex666, esenthial, kensizor, npl, s1zzi     |
|           12 |     3601 | 2026-03-06 | FURIA             | W   | 0.622      | 0.805        | 0.702 (0.351)    | -                | -         |    13.43 | alex666, esenthial, kensizor, npl, s1zzi     |
|           11 |     4507 | 2026-02-17 | Aurora            | L   | 0.506      | -            | -                | -                | -         |    -5.33 | alex666, esenthial, kensizor, npl, s1zzi     |
|           10 |     4545 | 2026-02-16 | The MongolZ       | L   | 0.499      | -            | -                | -                | -         |    -4.54 | alex666, esenthial, kensizor, npl, s1zzi     |
|            9 |     4592 | 2026-02-15 | HEROIC            | W   | 0.494      | 1.000        | 0.156 (0.077)    | 0.454 (0.224)    | -         |     4.08 | alex666, esenthial, kensizor, npl, s1zzi     |
|            8 |     4631 | 2026-02-14 | FURIA             | L   | 0.488      | -            | -                | -                | -         |    -4.99 | alex666, esenthial, kensizor, npl, s1zzi     |
|            7 |     5192 | 2026-01-29 | paiN              | L   | 0.380      | -            | -                | -                | -         |    -7.63 | alex666, esenthial, kensizor, npl, segukawa  |
|            6 |     5212 | 2026-01-28 | NRG               | L   | 0.373      | -            | -                | -                | -         |   -10.74 | alex666, esenthial, kensizor, npl, segukawa  |
|            5 |     6088 | 2025-12-07 | Natus Vincere     | L   | 0.026      | -            | -                | -                | -         |    -0.13 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     6112 | 2025-12-06 | paiN              | W   | 0.020      | -            | -                | -                | -         |     0.00 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     6140 | 2025-12-05 | Vitality          | L   | 0.013      | -            | -                | -                | -         |    -0.06 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     6157 | 2025-12-04 | MOUZ              | L   | 0.008      | -            | -                | -                | -         |    -0.04 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     6166 | 2025-12-04 | Falcons           | W   | 0.007      | -            | -                | -                | -         |     0.18 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($205,660.63)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $45,000.00     | $45,000.00      |
| 2026-05-17 |      1.000 | $42,000.00     | $42,000.00      |
| 2026-04-19 |      0.914 | $20,000.00     | $18,286.05      |
| 2026-04-11 |      0.860 | $62,500.00     | $53,771.18      |
| 2026-04-02 |      0.801 | $5,769.00      | $4,620.67       |
| 2026-03-29 |      0.773 | $20,000.00     | $15,450.91      |
| 2026-03-10 |      0.648 | $21,500.00     | $13,932.98      |
| 2026-02-22 |      0.541 | $18,750.00     | $10,138.03      |
| 2026-01-30 |      0.388 | $2,500.00      | $968.92         |
| 2025-12-14 |      0.075 | $20,000.00     | $1,491.91       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
