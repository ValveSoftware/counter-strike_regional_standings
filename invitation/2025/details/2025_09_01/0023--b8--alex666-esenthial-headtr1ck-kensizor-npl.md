### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [23](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [17]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1318.9<br />
<br />
Final Rank Value (1318.9) = Starting Rank Value (1294.9) + Head To Head Adjustments (24.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.523[<sup>2</sup>](#table1)
- Opponent Network: 0.236[<sup>2</sup>](#table1)
- LAN Wins: 0.599[<sup>2</sup>](#table1)

The average of these factors is 0.467<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1294.9
- 400 + ( ( 0.467 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1294.9


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
|           44 |       33 | 2025-08-30 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |    -7.22 | alex666, esenthial, headtr1ck, kensizor, npl |
|           43 |       39 | 2025-08-30 | Kaleido           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.96 | alex666, esenthial, headtr1ck, kensizor, npl |
|           42 |       69 | 2025-08-29 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -3.83 | alex666, esenthial, headtr1ck, kensizor, npl |
|           41 |      534 | 2025-08-10 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -1.04 | alex666, esenthial, headtr1ck, kensizor, npl |
|           40 |      616 | 2025-08-05 | FUT               | W   | 1.000      | 0.624        | 0.221 (0.138)    | 0.726 (0.453)    | 0 (0.000) |     6.89 | alex666, esenthial, headtr1ck, kensizor, npl |
|           39 |      822 | 2025-07-24 | FlyQuest          | L   | 0.940      | -            | -                | -                | -         |   -16.01 | alex666, esenthial, headtr1ck, kensizor, npl |
|           38 |      838 | 2025-07-23 | Astralis          | L   | 0.933      | -            | -                | -                | -         |    -3.84 | alex666, esenthial, headtr1ck, kensizor, npl |
|           37 |     1521 | 2025-06-10 | Lynn Vision       | L   | 0.648      | -            | -                | -                | -         |    -5.57 | alex666, esenthial, headtr1ck, kensizor, npl |
|           36 |     1536 | 2025-06-09 | FURIA             | L   | 0.641      | -            | -                | -                | -         |    -2.72 | alex666, esenthial, headtr1ck, kensizor, npl |
|           35 |     1552 | 2025-06-08 | HEROIC            | W   | 0.633      | 0.769        | 0.402 (0.196)    | 0.597 (0.291)    | 1 (0.633) |    16.00 | alex666, esenthial, headtr1ck, kensizor, npl |
|           34 |     1568 | 2025-06-07 | Virtus.pro        | L   | 0.628      | -            | -                | -                | -         |    -7.66 | alex666, esenthial, headtr1ck, kensizor, npl |
|           33 |     1576 | 2025-06-07 | Falcons           | W   | 0.627      | 0.769        | 0.966 (0.465)    | 0.389 (0.187)    | 1 (0.627) |    18.36 | alex666, esenthial, headtr1ck, kensizor, npl |
|           32 |     1609 | 2025-06-04 | Wildcard          | W   | 0.608      | -            | -                | -                | 1 (0.608) |     2.87 | alex666, esenthial, headtr1ck, kensizor, npl |
|           31 |     1625 | 2025-06-03 | OG                | W   | 0.601      | 0.624        | 0.101 (0.038)    | 0.879 (0.330)    | 1 (0.601) |     5.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|           30 |     1632 | 2025-06-03 | Imperial          | W   | 0.600      | 0.624        | 0.156 (0.058)    | 0.606 (0.227)    | 1 (0.600) |     6.44 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |     2025 | 2025-05-11 | PARIVISION        | W   | 0.448      | 0.500        | 0.123 (0.028)    | 0.977 (0.219)    | -         |     2.28 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |     2103 | 2025-05-08 | SINNERS           | W   | 0.428      | -            | -                | -                | -         |     1.12 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |     2129 | 2025-05-07 | Betera            | W   | 0.421      | 0.500        | -                | 0.718 (0.151)    | -         |     1.01 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |     2167 | 2025-05-06 | Zero Tenacity     | W   | 0.414      | 0.500        | -                | 0.810 (0.168)    | -         |     1.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     2232 | 2025-05-03 | Chinggis Warriors | W   | 0.397      | -            | -                | -                | 1 (0.397) |     2.89 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     2253 | 2025-05-03 | BIG               | L   | 0.393      | -            | -                | -                | -         |    -8.95 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     2280 | 2025-05-02 | JiJieHao          | W   | 0.384      | -            | -                | -                | 1 (0.384) |     1.81 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     2287 | 2025-05-01 | BIG               | L   | 0.380      | -            | -                | -                | -         |    -8.88 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     2324 | 2025-04-30 | The Huns          | W   | 0.373      | -            | -                | -                | 1 (0.373) |     3.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     2381 | 2025-04-27 | HEROIC            | L   | 0.354      | -            | -                | -                | -         |    -2.12 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     2415 | 2025-04-26 | BetBoom           | W   | 0.348      | 0.548        | 0.429 (0.082)    | 0.802 (0.153)    | -         |     7.20 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2442 | 2025-04-25 | HEROIC            | W   | 0.340      | 0.548        | 0.402 (0.075)    | -                | -         |     8.83 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     2462 | 2025-04-24 | Partizan          | W   | 0.332      | 0.548        | -                | 1.000 (0.182)    | -         |     1.48 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     2567 | 2025-04-17 | Astralis          | W   | 0.287      | 0.525        | 0.833 (0.126)    | -                | -         |     8.07 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     2578 | 2025-04-17 | ENCE              | W   | 0.286      | 0.525        | 0.151 (0.023)    | -                | -         |     5.20 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     2604 | 2025-04-16 | 9 Pandas          | W   | 0.280      | -            | -                | -                | -         |     0.54 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     2615 | 2025-04-16 | BC.Game           | W   | 0.278      | -            | -                | -                | -         |     0.32 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     2637 | 2025-04-15 | PARIVISION        | W   | 0.272      | -            | -                | -                | -         |     1.56 | alex666, esenthial, headtr1ck, kensizor, npl |
|           11 |     2648 | 2025-04-14 | SAW               | L   | 0.267      | -            | -                | -                | -         |    -3.43 | alex666, esenthial, headtr1ck, kensizor, npl |
|           10 |     2660 | 2025-04-14 | Metizport         | L   | 0.265      | -            | -                | -                | -         |    -7.42 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     3053 | 2025-03-31 | Ninjas in Pyjamas | L   | 0.173      | -            | -                | -                | -         |    -1.85 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     3079 | 2025-03-30 | GUN5              | W   | 0.167      | -            | -                | -                | -         |     0.65 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     3086 | 2025-03-30 | CYBERSHOKE        | W   | 0.166      | -            | -                | -                | -         |     0.54 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     3122 | 2025-03-29 | PARIVISION        | W   | 0.161      | -            | -                | -                | -         |     0.88 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     3148 | 2025-03-29 | ENCE              | W   | 0.159      | -            | -                | -                | -         |     2.82 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     3195 | 2025-03-28 | CYBERSHOKE        | L   | 0.154      | -            | -                | -                | -         |    -4.35 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     3283 | 2025-03-27 | Roler Coaster     | W   | 0.145      | -            | -                | -                | -         |     0.06 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     3365 | 2025-03-25 | Nemiga            | W   | 0.135      | -            | -                | -                | -         |     1.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     3568 | 2025-03-18 | Zero Tenacity     | L   | 0.088      | -            | -                | -                | -         |    -2.52 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,420.49)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      1.000 | $2,088.00      | $2,088.00       |
| 2025-08-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-07-25 |      0.948 | $2,500.00      | $2,368.94       |
| 2025-06-10 |      0.648 | $10,000.00     | $6,483.71       |
| 2025-05-11 |      0.448 | $17,000.00     | $7,619.78       |
| 2025-05-04 |      0.399 | $30,000.00     | $11,982.13      |
| 2025-04-27 |      0.354 | $35,000.00     | $12,377.93      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
