### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl, s1zzi<br />
Global Rank: [28](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [21]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  1471.6<br />
<br />
Final Rank Value (1471.6) = Starting Rank Value (1451.8) + Head To Head Adjustments (19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.531[<sup>1</sup>](#table2)
- Bounty Collected: 0.567[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.817[<sup>2</sup>](#table1)

The average of these factors is 0.561<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1451.8
- 400 + ( ( 0.561 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 1451.8


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
|           52 |      114 | 2026-10-29 | FaZe              | L   | 1.000      | -            | -                | -                | -         |   -13.37 | alex666, esenthial, kensizor, npl, s1zzi |
|           51 |      131 | 2026-10-29 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -16.41 | alex666, esenthial, kensizor, npl, s1zzi |
|           50 |      147 | 2026-10-28 | K27               | W   | 1.000      | 0.435        | -                | 0.762 (0.331)    | 1 (1.000) |    12.18 | alex666, esenthial, kensizor, npl, s1zzi |
|           49 |      151 | 2026-10-28 | Alliance          | W   | 1.000      | 0.435        | 0.238 (0.104)    | -                | 1 (1.000) |     8.41 | alex666, esenthial, kensizor, npl, s1zzi |
|           48 |      177 | 2026-10-27 | K27               | L   | 1.000      | -            | -                | -                | -         |   -18.79 | alex666, esenthial, kensizor, npl, s1zzi |
|           47 |     1218 | 2026-10-02 | fnatic            | L   | 0.992      | -            | -                | -                | -         |   -19.22 | alex666, esenthial, kensizor, npl, s1zzi |
|           46 |     1264 | 2026-10-01 | Luminosity        | L   | 0.985      | -            | -                | -                | -         |   -19.32 | alex666, esenthial, kensizor, npl, s1zzi |
|           45 |     1768 | 2026-09-22 | Luminosity        | L   | 0.926      | -            | -                | -                | -         |   -19.09 | alex666, esenthial, kensizor, npl, s1zzi |
|           44 |     1961 | 2026-09-17 | M80               | W   | 0.894      | 0.500        | 0.148 (0.066)    | -                | 1 (0.894) |    11.52 | alex666, esenthial, kensizor, npl, s1zzi |
|           43 |     1976 | 2026-09-17 | Luminosity        | W   | 0.893      | -            | -                | -                | 1 (0.893) |     8.27 | alex666, esenthial, kensizor, npl, s1zzi |
|           42 |     1979 | 2026-09-17 | Ninjas in Pyjamas | W   | 0.892      | 0.500        | 0.252 (0.113)    | 0.681 (0.304)    | 1 (0.892) |    10.60 | alex666, esenthial, kensizor, npl, s1zzi |
|           41 |     1987 | 2026-09-17 | GamerLegion       | W   | 0.892      | 0.500        | 0.161 (0.072)    | -                | 1 (0.892) |     9.51 | alex666, esenthial, kensizor, npl, s1zzi |
|           40 |     1998 | 2026-09-17 | Metizport         | W   | 0.891      | 0.500        | -                | 0.710 (0.316)    | 1 (0.891) |     5.40 | alex666, esenthial, kensizor, npl, s1zzi |
|           39 |     2160 | 2026-09-12 | Nemiga            | L   | 0.860      | -            | -                | -                | -         |   -10.27 | alex666, esenthial, kensizor, npl, s1zzi |
|           38 |     2175 | 2026-09-12 | 1win              | W   | 0.859      | 0.769        | 0.301 (0.199)    | 0.692 (0.457)    | -         |    14.40 | alex666, esenthial, kensizor, npl, s1zzi |
|           37 |     2207 | 2026-09-11 | Nuclear TigeRES   | W   | 0.854      | 0.769        | -                | 1.000 (0.656)    | -         |     7.43 | alex666, esenthial, kensizor, npl, s1zzi |
|           36 |     2235 | 2026-09-11 | Inner Circle      | W   | 0.851      | 0.769        | 0.133 (0.087)    | 0.417 (0.273)    | -         |    11.87 | alex666, esenthial, kensizor, npl, s1zzi |
|           35 |     2275 | 2026-09-10 | 1win              | L   | 0.846      | -            | -                | -                | -         |   -10.98 | alex666, esenthial, kensizor, npl, s1zzi |
|           34 |     2353 | 2026-09-09 | BET-M             | W   | 0.839      | 0.769        | -                | 0.465 (0.300)    | -         |     1.64 | alex666, esenthial, kensizor, npl, s1zzi |
|           33 |     2561 | 2026-09-04 | Nuclear TigeRES   | W   | 0.807      | -            | -                | -                | -         |     7.50 | alex666, esenthial, kensizor, npl, s1zzi |
|           32 |     2606 | 2026-09-03 | HOTU              | W   | 0.800      | -            | -                | -                | -         |    14.29 | alex666, esenthial, kensizor, npl, s1zzi |
|           31 |     2637 | 2026-09-02 | EYEBALLERS        | W   | 0.794      | -            | -                | -                | -         |     4.53 | alex666, esenthial, kensizor, npl, s1zzi |
|           30 |     2651 | 2026-09-02 | Color             | W   | 0.793      | -            | -                | -                | -         |     2.08 | alex666, esenthial, kensizor, npl, s1zzi |
|           29 |     3159 | 2026-08-20 | Spirit            | L   | 0.706      | -            | -                | -                | -         |    -2.21 | alex666, esenthial, kensizor, npl, s1zzi |
|           28 |     3323 | 2026-08-14 | Vitality          | W   | 0.667      | 1.000        | 1.000 (0.667)    | 0.435 (0.290)    | 1 (0.667) |    19.53 | alex666, esenthial, kensizor, npl, s1zzi |
|           27 |     3377 | 2026-08-12 | PARIVISION        | W   | 0.653      | 1.000        | 0.351 (0.229)    | 0.291 (0.190)    | 1 (0.653) |    12.59 | alex666, esenthial, kensizor, npl, s1zzi |
|           26 |     4289 | 2026-07-10 | Virtus.pro        | L   | 0.433      | -            | -                | -                | -         |    -8.07 | alex666, esenthial, kensizor, npl, s1zzi |
|           25 |     4321 | 2026-07-09 | Sangrija          | W   | 0.425      | -            | -                | -                | -         |     0.04 | alex666, esenthial, kensizor, npl, s1zzi |
|           24 |     4357 | 2026-07-05 | BIG               | L   | 0.399      | -            | -                | -                | -         |    -7.04 | alex666, esenthial, kensizor, npl, s1zzi |
|           23 |     4376 | 2026-07-04 | Lynn Vision       | W   | 0.391      | -            | -                | -                | 1 (0.391) |     2.10 | alex666, esenthial, kensizor, npl, s1zzi |
|           22 |     4386 | 2026-07-03 | Alliance          | L   | 0.386      | -            | -                | -                | -         |    -8.51 | alex666, esenthial, kensizor, npl, s1zzi |
|           21 |     4401 | 2026-07-02 | Nemesis           | L   | 0.380      | -            | -                | -                | -         |    -6.06 | alex666, esenthial, kensizor, npl, s1zzi |
|           20 |     4418 | 2026-07-01 | MIBR              | W   | 0.374      | 1.000        | 0.331 (0.124)    | 0.500 (0.187)    | -         |     7.40 | alex666, esenthial, kensizor, npl, s1zzi |
|           19 |     4750 | 2026-06-13 | FUT               | L   | 0.252      | -            | -                | -                | -         |    -1.91 | alex666, esenthial, kensizor, npl, s1zzi |
|           18 |     4792 | 2026-06-12 | The MongolZ       | L   | 0.245      | -            | -                | -                | -         |    -3.32 | alex666, esenthial, kensizor, npl, s1zzi |
|           17 |     4805 | 2026-06-11 | FURIA             | L   | 0.240      | -            | -                | -                | -         |    -0.39 | alex666, esenthial, kensizor, npl, s1zzi |
|           16 |     4835 | 2026-06-09 | BIG               | W   | 0.227      | -            | -                | -                | -         |     3.00 | alex666, esenthial, kensizor, npl, s1zzi |
|           15 |     4862 | 2026-06-08 | MIBR              | W   | 0.219      | 0.809        | 0.331 (0.059)    | -                | -         |     4.41 | alex666, esenthial, kensizor, npl, s1zzi |
|           14 |     4877 | 2026-06-07 | GamerLegion       | W   | 0.214      | -            | -                | -                | -         |     3.33 | alex666, esenthial, kensizor, npl, s1zzi |
|           13 |     4900 | 2026-06-06 | M80               | L   | 0.208      | -            | -                | -                | -         |    -3.17 | alex666, esenthial, kensizor, npl, s1zzi |
|           12 |     4921 | 2026-06-06 | FUT               | L   | 0.205      | -            | -                | -                | -         |    -1.54 | alex666, esenthial, kensizor, npl, s1zzi |
|           11 |     4978 | 2026-06-03 | M80               | W   | 0.187      | -            | -                | -                | -         |     3.07 | alex666, esenthial, kensizor, npl, s1zzi |
|           10 |     5010 | 2026-06-02 | THUNDER dOWNUNDER | W   | 0.180      | -            | -                | -                | -         |     0.11 | alex666, esenthial, kensizor, npl, s1zzi |
|            9 |     5019 | 2026-06-02 | TYLOO             | W   | 0.179      | -            | -                | -                | -         |     1.13 | alex666, esenthial, kensizor, npl, s1zzi |
|            8 |     5447 | 2026-05-22 | MOUZ              | L   | 0.105      | -            | -                | -                | -         |    -0.15 | alex666, esenthial, kensizor, npl, s1zzi |
|            7 |     5457 | 2026-05-21 | MIBR              | L   | 0.103      | -            | -                | -                | -         |    -1.16 | alex666, esenthial, kensizor, npl, s1zzi |
|            6 |     5532 | 2026-05-20 | The MongolZ       | W   | 0.092      | -            | -                | -                | -         |     1.68 | alex666, esenthial, kensizor, npl, s1zzi |
|            5 |     5540 | 2026-05-19 | Ninjas in Pyjamas | W   | 0.090      | -            | -                | -                | -         |     1.79 | alex666, esenthial, kensizor, npl, s1zzi |
|            4 |     5692 | 2026-05-13 | Vitality          | L   | 0.048      | -            | -                | -                | -         |    -0.09 | alex666, esenthial, kensizor, npl, s1zzi |
|            3 |     5703 | 2026-05-13 | FUT               | W   | 0.047      | -            | -                | -                | -         |     1.13 | alex666, esenthial, kensizor, npl, s1zzi |
|            2 |     5744 | 2026-05-12 | BC.Game           | W   | 0.040      | -            | -                | -                | -         |     0.01 | alex666, esenthial, kensizor, npl, s1zzi |
|            1 |     5781 | 2026-05-11 | BETBOOM           | L   | 0.034      | -            | -                | -                | -         |    -0.11 | alex666, esenthial, kensizor, npl, s1zzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($72,109.94)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-29 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-10-04 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-09-23 |      0.935 | $10,000.00     | $9,351.00       |
| 2026-08-23 |      0.727 | $35,000.00     | $25,430.94      |
| 2026-07-12 |      0.445 | $27,500.00     | $12,240.72      |
| 2026-06-21 |      0.307 | $20,000.00     | $6,139.00       |
| 2026-05-24 |      0.118 | $45,000.00     | $5,315.61       |
| 2026-05-17 |      0.075 | $42,000.00     | $3,132.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
