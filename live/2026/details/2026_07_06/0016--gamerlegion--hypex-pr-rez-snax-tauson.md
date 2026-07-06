### Roster Details<br />
Team Name: GamerLegion<br />
Roster: hypex, PR, REZ, Snax, Tauson<br />
Global Rank: [16](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [12]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  1534.4<br />
<br />
Final Rank Value (1534.4) = Starting Rank Value (1634.9) + Head To Head Adjustments (-100.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.768[<sup>1</sup>](#table2)
- Bounty Collected: 0.646[<sup>2</sup>](#table1)
- Opponent Network: 0.301[<sup>2</sup>](#table1)
- LAN Wins: 0.906[<sup>2</sup>](#table1)

The average of these factors is 0.655<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1634.9
- 400 + ( ( 0.655 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1634.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      143 | 2026-06-24 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -29.59 | hypex, PR, REZ, Snax, Tauson |
|           44 |      154 | 2026-06-23 | Acend             | L   | 1.000      | -            | -                | -                | -         |   -28.23 | hypex, PR, REZ, Snax, Tauson |
|           43 |      458 | 2026-06-07 | B8                | L   | 1.000      | -            | -                | -                | -         |   -17.25 | hypex, PR, REZ, Snax, Tauson |
|           42 |      483 | 2026-06-06 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -13.60 | hypex, PR, REZ, Snax, Tauson |
|           41 |      507 | 2026-06-06 | Astralis          | L   | 0.999      | -            | -                | -                | -         |   -17.19 | hypex, PR, REZ, Snax, Tauson |
|           40 |      543 | 2026-06-04 | BIG               | W   | 0.987      | 0.624        | 0.093 (0.057)    | 0.693 (0.427)    | 1 (0.987) |     5.06 | hypex, PR, REZ, Snax, Tauson |
|           39 |      566 | 2026-06-03 | BetBoom           | L   | 0.980      | -            | -                | -                | -         |   -14.89 | hypex, PR, REZ, Snax, Tauson |
|           38 |      585 | 2026-06-02 | FlyQuest          | W   | 0.974      | 0.624        | -                | 0.296 (0.180)    | 1 (0.974) |     1.58 | hypex, PR, REZ, Snax, Tauson |
|           37 |      597 | 2026-06-02 | NRG               | W   | 0.973      | 0.624        | 0.073 (0.044)    | -                | 1 (0.973) |     1.58 | hypex, PR, REZ, Snax, Tauson |
|           36 |     1167 | 2026-05-17 | Natus Vincere     | L   | 0.868      | -            | -                | -                | -         |    -6.50 | hypex, PR, REZ, Snax, Tauson |
|           35 |     1193 | 2026-05-16 | Legacy            | W   | 0.861      | 1.000        | 1.000 (0.861)    | 0.597 (0.514)    | 1 (0.861) |    19.61 | hypex, PR, REZ, Snax, Tauson |
|           34 |     1226 | 2026-05-15 | paiN              | W   | 0.855      | 1.000        | 0.233 (0.200)    | 0.394 (0.337)    | 1 (0.855) |     8.14 | hypex, PR, REZ, Snax, Tauson |
|           33 |     1271 | 2026-05-13 | Astralis          | W   | 0.842      | 1.000        | 0.531 (0.448)    | 0.322 (0.271)    | 1 (0.842) |    12.47 | hypex, PR, REZ, Snax, Tauson |
|           32 |     1278 | 2026-05-13 | Liquid            | W   | 0.841      | 1.000        | 0.101 (0.085)    | 0.259 (0.217)    | 1 (0.841) |     2.84 | hypex, PR, REZ, Snax, Tauson |
|           31 |     1312 | 2026-05-12 | Natus Vincere     | L   | 0.836      | -            | -                | -                | -         |    -5.70 | hypex, PR, REZ, Snax, Tauson |
|           30 |     1353 | 2026-05-11 | SINNERS           | W   | 0.829      | 1.000        | 0.092 (0.076)    | 0.422 (0.349)    | 1 (0.829) |     2.83 | hypex, PR, REZ, Snax, Tauson |
|           29 |     1583 | 2026-05-02 | Vitality          | L   | 0.768      | -            | -                | -                | -         |    -3.29 | hypex, PR, REZ, Snax, Tauson |
|           28 |     1627 | 2026-05-01 | Astralis          | W   | 0.763      | 1.000        | 0.531 (0.405)    | 0.322 (0.246)    | 1 (0.763) |    12.06 | hypex, PR, REZ, Snax, Tauson |
|           27 |     1680 | 2026-04-30 | Natus Vincere     | L   | 0.756      | -            | -                | -                | -         |    -5.00 | hypex, PR, REZ, Snax, Tauson |
|           26 |     1725 | 2026-04-29 | FURIA             | W   | 0.749      | 1.000        | 0.820 (0.614)    | 0.416 (0.312)    | 1 (0.749) |    17.25 | hypex, PR, REZ, Snax, Tauson |
|           25 |     2558 | 2026-04-04 | BetBoom           | L   | 0.580      | -            | -                | -                | -         |    -8.03 | hypex, PR, REZ, Snax, Tauson |
|           24 |     2636 | 2026-04-03 | G2                | L   | 0.574      | -            | -                | -                | -         |    -6.61 | hypex, PR, REZ, Snax, Tauson |
|           23 |     2706 | 2026-04-02 | Ninjas in Pyjamas | W   | 0.568      | -            | -                | -                | -         |     2.75 | hypex, PR, REZ, Snax, Tauson |
|           22 |     2817 | 2026-04-01 | 9INE              | W   | 0.560      | -            | -                | -                | -         |     0.93 | hypex, PR, REZ, Snax, Tauson |
|           21 |     3233 | 2026-03-27 | Alliance          | L   | 0.526      | -            | -                | -                | -         |   -13.20 | hypex, PR, REZ, Snax, Tauson |
|           20 |     3437 | 2026-03-23 | Metizport         | W   | 0.500      | -            | -                | -                | -         |     0.87 | hypex, PR, REZ, Snax, Tauson |
|           19 |     4766 | 2026-02-24 | illwill           | W   | 0.320      | -            | -                | -                | -         |     0.29 | hypex, PR, REZ, Snax, Tauson |
|           18 |     4789 | 2026-02-24 | SINNERS           | W   | 0.319      | -            | -                | -                | -         |     1.05 | hypex, PR, REZ, Snax, Tauson |
|           17 |     4821 | 2026-02-23 | illwill           | W   | 0.313      | -            | -                | -                | -         |     0.25 | hypex, PR, REZ, Snax, Tauson |
|           16 |     4831 | 2026-02-23 | Sashi             | W   | 0.312      | -            | -                | -                | -         |     0.52 | hypex, PR, REZ, Snax, Tauson |
|           15 |     4842 | 2026-02-22 | Persona Grata     | W   | 0.308      | -            | -                | -                | -         |     0.03 | hypex, PR, REZ, Snax, Tauson |
|           14 |     4853 | 2026-02-22 | Phantom           | W   | 0.308      | -            | -                | -                | -         |     0.04 | hypex, PR, REZ, Snax, Tauson |
|           13 |     4861 | 2026-02-22 | ECSTATIC          | W   | 0.307      | -            | -                | -                | -         |     0.27 | hypex, PR, REZ, Snax, Tauson |
|           12 |     4872 | 2026-02-22 | SINNERS           | L   | 0.307      | -            | -                | -                | -         |    -8.71 | hypex, PR, REZ, Snax, Tauson |
|           11 |     4897 | 2026-02-22 | Avanti            | W   | 0.306      | -            | -                | -                | -         |     0.01 | hypex, PR, REZ, Snax, Tauson |
|           10 |     5551 | 2026-02-08 | Ninjas in Pyjamas | L   | 0.213      | -            | -                | -                | -         |    -5.83 | hypex, PR, REZ, Snax, Tauson |
|            9 |     5574 | 2026-02-07 | BC.Game           | W   | 0.206      | -            | -                | -                | -         |     0.13 | hypex, PR, REZ, Snax, Tauson |
|            8 |     5612 | 2026-02-06 | ex-RUBY           | W   | 0.200      | 0.769        | -                | 1.000 (0.154)    | -         |     0.12 | hypex, PR, REZ, Snax, Tauson |
|            7 |     5815 | 2026-01-30 | Astralis          | L   | 0.154      | -            | -                | -                | -         |    -3.08 | hypex, PR, REZ, Snax, Tauson |
|            6 |     5826 | 2026-01-30 | HEROIC            | W   | 0.153      | -            | -                | -                | -         |     0.58 | hypex, PR, REZ, Snax, Tauson |
|            5 |     5883 | 2026-01-28 | Aurora            | L   | 0.139      | -            | -                | -                | -         |    -1.68 | hypex, PR, REZ, Snax, Tauson |
|            4 |     5890 | 2026-01-27 | BET-M             | L   | 0.135      | -            | -                | -                | -         |    -4.05 | hypex, PR, REZ, Snax, Tauson |
|            3 |     6019 | 2026-01-23 | Vitality          | L   | 0.107      | -            | -                | -                | -         |    -0.72 | hypex, PR, REZ, Snax, Tauson |
|            2 |     6212 | 2026-01-17 | Aurora            | W   | 0.068      | 0.895        | 0.605 (0.037)    | -                | -         |     1.30 | hypex, PR, REZ, Snax, Tauson |
|            1 |     6357 | 2026-01-14 | Passion UA        | W   | 0.046      | -            | -                | -                | -         |     0.07 | hypex, PR, REZ, Snax, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($280,995.44)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.50) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-06-09 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-05-17 |      0.868 | $170,000.00    | $147,607.17     |
| 2026-05-03 |      0.775 | $130,000.00    | $100,713.10     |
| 2026-04-04 |      0.581 | $13,500.00     | $7,842.31       |
| 2026-03-28 |      0.534 | $2,500.00      | $1,335.62       |
| 2026-02-24 |      0.320 | $5,930.00      | $1,898.94       |
| 2026-01-30 |      0.154 | $4,500.00      | $695.19         |
| 2026-01-25 |      0.121 | $73,750.00     | $8,903.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
